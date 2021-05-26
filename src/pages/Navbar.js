import React from 'react'
import {AppBar, Toolbar, IconButton} from '@material-ui/core';
import {NavLink} from "react-router-dom";

function Navbar(props) {
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar variant="dense">
                    <IconButton edge="start" >
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </IconButton>
                    <IconButton edge="start" >
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </IconButton>
                    <IconButton edge="end" >
                        <NavLink to="/">
                            Login
                        </NavLink>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    )
}

export default Navbar
