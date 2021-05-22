import React from 'react'
import {AppBar, Toolbar, IconButton} from '@material-ui/core';

function Navbar(props) {
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar variant="dense">
                    <IconButton edge="start" >
                        Home
                    </IconButton>
                    <IconButton edge="start" >
                        About
                    </IconButton>
                    <IconButton edge="end" >
                        Login
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    )
}

export default Navbar
