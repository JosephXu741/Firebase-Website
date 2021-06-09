import React, {useState} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Navbar from './Navbar.js';
import { Typography } from '@material-ui/core';
import About from "./About"
import Education from "./Education"
import Projects from "./Projects"
import "@fontsource/roboto"
import "@fontsource/roboto-slab"
import "react-social-icons"

const styles = {
    main: {
        background: "#e1e5ea",
        display: "grid",
        width:"100%",
        height: "100%",
        justifyContent: "center",

        overflow: "auto",
    },
    body: {
        grid: "200px / auto 1000px auto",
        paddingBottom: "100px",
    },
    heading: {
        fontSize:"100",
        paddingTop: "100px",
        fontFamily: "roboto-slab",
    },
    about: {
        alignSelf: "start",
        fontSize:"25",
        paddingTop: "100px",
        fontFamily: "roboto",
    },
    navbar: {
        placeItems: "center"
    },
    footer: {
        fontSize: 15
    }
}



function Home(props) {
    const {classes} = props
    const [showProjects, setShowProjects] = useState(false)
    const [showEducation, setShowEducation] = useState(false)
    const [showBio, setShowBio] = useState(true)

    const projects = () => {
        setShowBio(false)
        setShowEducation(false)
        setShowProjects(true)
    }

    const bio = () => {
        setShowBio(true)
        setShowEducation(false)
        setShowProjects(false)
    }

    const education = () => {
        setShowBio(false)
        setShowEducation(true)
        setShowProjects(false)
    }

    return (
        <div className={classes.main}>
            <div className={classes.body}>
                <Typography className={classes.heading}>
                    Hello! My Name is Joseph!
                </Typography>
                <Typography className={classes.about}>
                    I am a Penultimate-year Computer Science / Commerce Student Studying at UNSW
                </Typography>
                <div className={classes.navbar}>
                    <Navbar functions={{projects, bio, education}}/>
                </div>
                <div className={classes.content}>
                    {showProjects && <Projects />}
                    {showEducation && <Education />}
                    {showBio && <About />}
                </div>
            </div>
            <Typography className={classes.footer}>
                This webpage is currently not mobile friendly! For best experience please view on desktop!
            </Typography>
        </div>
    )
}

export default withStyles(styles)(Home)
