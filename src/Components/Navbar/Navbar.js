import { AppBar, Button, IconButton, Menu, Toolbar, Typography } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react'
import './Navbar.css'
import logo from './Mesah Logo 1 v2 (1).png'
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        margin: theme.spacing(1)
    },
    title: {
        flexGrow: 1,
    }
}))


export default function Navbar() {
    const classes = useStyles();

    return (
        <>
        <div className={classes.root}>
        <AppBar position="static" color="primary">
            <Toolbar>
                <IconButton edge='start' className={classes.menuButton} color="inherit" aria-label="menu" ><MenuIcon /></IconButton>
                <Typography variant="h4" className={classes.title} color="inherit" >Mesah Comm Inc <img className="logo" src={logo} alt="Logo"></img></Typography>
                <Button variant="contained" disabled>Login</Button>

                <Link to="/about">
                <Button
                    className={classes.menuButton} 
                    color="secondary"
                    variant="contained"
                    endIcon={<InfoIcon edge="start" fontSize="small"/>}
                >
                About Us
                </Button>
                </Link>

                <Link to="/">
                <Button 
                className={classes.menuButton}
                color="secondary"
                variant="contained"
                endIcon={<HomeIcon fontSize="small"/>}
                >
                    Home Page
                </Button>

                </Link>

            </Toolbar>
        </AppBar>

        </div>
        </>
    )
}
