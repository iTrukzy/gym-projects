import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';
import { Redirect } from 'react-router';
import Header from '../components/Header';
import { Container, Grid } from '@material-ui/core';

import MyProjects from '../components/MyProjects'

const Home = () => {
    const {user} = useContext(MyContext)

    return (
        <>
        {
            user ?
            <>
            <Header />
            <Container>
                <Grid>
                    
                    <Grid>
                        <MyProjects />
                    </Grid>
                </Grid>
            </Container>
            </>
            :
            <Redirect to="/" />
        }
        </>
    )
}

export default Home
