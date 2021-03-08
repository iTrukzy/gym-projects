import React, { useContext, useEffect, useState } from 'react'
import './App.css';
import { HashRouter as Router, Switch, Route} from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register';
import { auth, db } from './database/firebase';
import Settings from './components/Settings';
import { MyContext } from './context/MyContext';

const App = () => {
  const [fireData, setFireData] = useState([])
  const {info, setInfo} = useContext(MyContext)

  // toma todos los usuarios en la coleccion de user firebase.firestore
  useEffect(() => {
    const getFireData = () => {
      db.collection("user").onSnapshot((snapshot) => {
        setFireData(snapshot.docs.map((doc) => {
          return {id: doc.id, email: doc.data().email}
        }))
      })
      
    }
    getFireData()
  }, [])

  // toma el usuario que se ha logueado en la aplicacion para mandar sun datos al estado setInfo
  useEffect(() => {
    auth.onAuthStateChanged((users) => {
      if(users) {
        setInfo({id: users.uid, name: users.displayName, email: users.email})
      } 
    })
  }, [setInfo])

  // envia a la collecion user como id de la info y con los datos del estado info
  useEffect(() => {
      if(info) {
        db.collection('user').doc(info.id).set({
          name: info.name,
          email: info.email
        })
      }
  }, [info])

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Login /> }/>
        <Route exact path="/home" render={() => <Home /> }/>
        <Route exact path="/register" render={() => <Register /> }/>
        <Route exact path="/home/settings" render={() => <Settings />}/>
      </Switch>
    </Router>
  );
}

export default App;
