import React from 'react'
import {AppBar, Toolbar, IconButton} from '@material-ui/core';
import {NavLink} from "react-router-dom";
import {withStyles} from '@material-ui/core/styles';

const styles = {
    main: {
        display: "flex",
        alignItems: "space-between"
    }
}

function Navbar(props) {
    return (
        <div>
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
                    <NavLink to="/login">
                        Login
                    </NavLink>
                </IconButton>
            </Toolbar>
        </div>
    )
}

export default withStyles(styles)(Navbar)
