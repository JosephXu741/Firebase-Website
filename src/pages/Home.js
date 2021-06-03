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
        alignItems: "start",
        "& .body-div" : {
            grid: "200px / auto 1000px auto",
            "& .heading": {
                fontSize:"100",
                paddingTop: "100px",
                fontFamily: "roboto-slab",
            },
            "& .about": {
                alignSelf: "start",
                fontSize:"25",
                paddingTop: "100px",
                fontFamily: "roboto",
            },
        },
    },
    content: {
        placeItems: "center"
    },
    navbar: {
        placeItems: "center"
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
            <div className="body-div">
                <Typography className="heading">
                    Hello! My name is Joseph!
                </Typography>
                <Typography className="about">
                    I am a third-year Computer Science / Commerce student 
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
        </div>
    )
}

export default withStyles(styles)(Home)