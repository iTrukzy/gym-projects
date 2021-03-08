import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles(() => ({
    title: {
        flexGrow: 1,
        color: "#0277bd" 
    },
    backGroud: {
        background: "#012f3d",
    },
    navbar: {
        padding: "20px",
        borderBottom: "2px solid #e0e0e0",
        marginBottom: "10px"
    },
    marginRight: {
        marginRight: "20px",
        textDecoration: "none",   
        color: "#0277bd"   
    },
    media: {
        height: 100,
        width: 200,
    },
    card: {
        padding: "20px",
        margin: "30px 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    table: {
        minWidth: 650,
    },
}))


export {
    styles
}