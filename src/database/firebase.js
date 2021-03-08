import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB85FTCOjY1EG2tlNp3tc1nVVMzbfCHs1g",
    authDomain: "my-projects-f7e01.firebaseapp.com",
    projectId: "my-projects-f7e01",
    storageBucket: "my-projects-f7e01.appspot.com",
    messagingSenderId: "122399361674",
    appId: "1:122399361674:web:2a90a8d6e2498acd027b73",
    measurementId: "G-SM545C4CXM"
};
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const auth = firebase.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider()

export {
    db,
    fire,
    auth,
    googleProvider
}