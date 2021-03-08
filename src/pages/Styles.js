import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
    
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: '100vh',
    },
    margin: {
        margin: '20px',
        width: "400px"
    },
    fixed: {
        position: "fixed",
        left: "0",
        width: "100%",
    },
    title: {
        flexGrow: 1,
    },
    backGroud: {
        background: "#263238",
    },
    buttons: {
        display: "flex",
        justifyContent: "space-around"
    },
    subtitle1: {
        margin: "30px",
        fontSize: "14px",
        textAlign: "center"
    },
    link: {
        margin: "0 20px",
        fontSize: "14px",
        textDecoration: 'none',
        color: "#5c6bc0"
    }
}))


export {
    styles
}