import { Grid, Typography, TableContainer, Paper, TableHead, TableCell, TableRow, TableBody, Table, Button } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../context/MyContext'
import { db } from '../database/firebase'
import {styles} from './Styles'



const MyProjects = () => {
    const [getProjects, setGetProjects] = useState([])
    const classes = styles()
    const { info } = useContext(MyContext)

    useEffect(() => {
        const getDataProjects = () => {
            // db.collection(`projects/${info.id}/${info.email}`).doc().set({
            //     description: "Aplicacion para listar tareas",
            //     img: "https://www.ntaskmanager.com/wp-content/uploads/2020/01/Project-Control-Simplified-and-how-to-control-projects.png",
            //     link: "https://william-todo-list.netlify.app",
            //     name: "Todo List"
            // })
            db.collection(`projects/${info.id}/${info.email}`).onSnapshot((snapshot) => {
                setGetProjects(snapshot.docs.map((doc) => {
                    return {id: doc.id, img: doc.data().img, link: doc.data().link, name: doc.data().name, description: doc.data().description}
                }))
              })
        }
        getDataProjects()
    }, [info])

    return (
        <>
        <Grid>
            {
                getProjects.length > 0 ?
                <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Img</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="center">Link</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                     <TableBody>
                    {getProjects.map((row) => (
                        <TableRow key={row.id}>
                        <TableCell component="th" scope="row" align="center">
                            <img className={classes.media} src={row.img} alt={row.name}/>
                        </TableCell>
                        <TableCell align="center">{row.name}</TableCell>
                        <TableCell align="center">{row.description}</TableCell>
                        <TableCell align="center"><a href={row.link} target="_blanck">View</a> </TableCell>
                        <TableCell align="center"><Button>Delete</Button> </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                    
                </Table>
            </TableContainer>
            :
            <Typography variant="h5" color="initial" align="center">No tienes Proyectos, Puedes agregarlos dando clik en el boton!</Typography>
            }
        </Grid>
        </>
    )
}

export default MyProjects
