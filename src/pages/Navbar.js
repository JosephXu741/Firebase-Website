import React from 'react'
import {AppBar, Toolbar, IconButton} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import "react-social-icons"
import { SocialIcon } from 'react-social-icons';

const styles = {
    main: {
        display: "flex",
        justifyContent: "space-around",
        paddingTop: "50px",
        paddingBottom: "50px"
    },
    // Have to change this to reflect resize changes
    rightButton: {
        flexGrow: "2"
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        width: "inherit"
    }
}

function Navbar(props) {
    const {projects, education, bio} = props.functions
    const {classes}= props



    return (
        <div className={classes.main}>
            <Toolbar className={classes.toolbar} color="#e1e5ea">
                <IconButton onClick={() => projects()} edge="start" >
                    Projects
                </IconButton>
                <IconButton onClick={() => education()} edge="start" >
                    Education
                </IconButton>
                <IconButton onClick={() => bio()} edge="start" >
                    About
                </IconButton>
                <IconButton className={classes.rightButton}>
                    <SocialIcon url="https://github.com/JosephXu741" />
                </IconButton>
                <IconButton >
                    <SocialIcon url="https://www.linkedin.com/in/josephxu499/" />
                </IconButton>
                
            </Toolbar>
        </div>
    )
}

export default withStyles(styles)(Navbar)
