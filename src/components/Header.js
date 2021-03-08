import React, { useContext } from 'react'
import { AppBar, Button, Container, Toolbar, Typography } from '@material-ui/core'
import { styles } from './Styles';
import { auth } from '../database/firebase';
import { MyContext } from '../context/MyContext';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const Header = () => {
    const {user, setUser} = useContext(MyContext)
    const classes = styles()

    
    const handleLogOut = () => {
        auth.signOut()
        setUser(null)
    }
    return (
        <>
        {
            user ?
            <div>
                <AppBar position="static" className={classes.backGroud}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            My Projects sdf
                        </Typography>
                        <Button variant="outlined" color="primary" onClick={() => handleLogOut()}>Log Out</Button>
                    </Toolbar>
                </AppBar>
                <Container className={classes.navbar}>
                    <Link className={classes.marginRight} to="/home">My Projects</Link>
                    <Link className={classes.marginRight} to="/home/settings">Settings</Link>
                </Container>
            </div>
            :
            <Redirect to="/" />
        }
        </>
    )
}

export default Header
