import React, { useContext, useState } from 'react'
import { Container, Grid, Button, Typography, TextField } from '@material-ui/core'
import { Alert } from '@material-ui/lab';
import { Redirect } from 'react-router'
import { MyContext } from '../context/MyContext'
import { auth, googleProvider } from '../database/firebase'

import { styles } from './Styles'
import { Link } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState(null)

    const classes = styles()

    const { email, password, setEmail, setPassword, user, setUser } = useContext(MyContext)

    const handleEmailPassword = () => {
        auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
          setUser(user.user.email)
          setError(null)
        })
        .catch((error) => {
            if(error.code === "auth/invalid-email") {
                setError("Email Was Incorrect !")
            } else {
                setError("Password Was Incorrect !")
            }
            setUser(null)
        })
        setPassword("")
        setEmail("")
    }

    const handleGoogle = () => {
        auth.signInWithPopup(googleProvider)
        .then((user) => {
            setUser(user.user.email)
            setError(null)
        })
        .catch((error) => {
            return error
        })
    }

    
    
    
    
    return (
        <>
        {
            user ?
            <Redirect to="/home" />
        :
            <Container maxWidth="lg">
            {error ? <Alert severity="error" className={classes.fixed}>{error}</Alert> : <span></span>}
            <Grid className={classes.container} container>   
                <Grid>
                    <Typography variant="h5" color="initial" className={classes.margin} align="center">Log In</Typography>
                    <div className={classes.margin}>
                        <TextField
                        label="Email"
                        type="email"
                        value={email}
                        fullWidth
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={classes.margin}>
                        <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Link to="/register" className={classes.link} variant="subtitle2" color="initial">Create new account!</Link>
                    <Typography className={classes.subtitle1} variant="subtitle1" color="initial">Login With</Typography>
                    <div className={classes.buttons}>
                        <Button onClick={() => handleGoogle()} variant="outlined" color="default">
                            Google
                        </Button>
                        <Button variant="outlined" color="default">
                            Facebook
                        </Button>
                        <Button variant="outlined" color="default">
                            GitHub
                        </Button>
                    </div>
                </Grid>
                <Grid>
                    <Button variant="contained" color="primary" className={classes.margin} onClick={() => handleEmailPassword()}>
                        Login
                    </Button>
                </Grid>
                    
            </Grid>
        </Container>
        }
        </>
    )
}

export default Login
