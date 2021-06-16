import React from 'react'
import {Toolbar, IconButton} from '@material-ui/core';
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
    },
    underline: {
        textDecoration: "underline"
    }
}

function Navbar(props) {
    const {projects, education, bio} = props.functions
    const {classes} = props
    const [underline, setUnderline] = React.useState('about')



    return (
        <div className={classes.main}>
            <Toolbar className={classes.toolbar} color="#e1e5ea">
                <IconButton className={underline === "about" ? classes.underline : ''} 
                            onClick={() => {bio(); setUnderline('about')}} >
                    About
                </IconButton>
                <IconButton className={underline === "education" ? classes.underline : ''} 
                            onClick={() => {education(); setUnderline('education')}} >
                    Education
                </IconButton>
                <IconButton className={underline === "projects" ? classes.underline : ''} 
                            onClick={() => {projects(); setUnderline('projects')}} >
                    Projects
                </IconButton>
                <IconButton className={classes.rightButton}>
                    <SocialIcon url="https://github.com/JosephXu741" target="_blank" rel="noopener noreferrer" />
                </IconButton>
                <IconButton >
                    <SocialIcon url="https://www.linkedin.com/in/josephxu499/" target="_blank" rel="noopener noreferrer" />
                </IconButton>
                
            </Toolbar>
        </div>
    )
}

export default withStyles(styles)(Navbar)
