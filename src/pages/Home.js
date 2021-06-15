import React, {useState, useRef} from 'react';
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
        overflow: "auto",
    },
    body: {
        grid: "auto / auto 1000px auto",
        paddingBottom: "100px",
    },
    heading: {
        fontSize:"14vw",
        paddingTop: "18vh",
        fontFamily: "roboto-slab",
        overflow: "auto",
        width: "66vw",
        paddingLeft: "6vw"
    },
    subheading: {
        fontSize:"6vw",
        fontFamily: "roboto-slab",
        overflow: "auto",
        width: "66vw",
        paddingLeft: "6vw"
    },
    about: {
        fontSize:"1.5vw",
        fontFamily: "roboto",
        paddingBottom:"2vh",
        paddingLeft: "6vw"
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
    const navbar = useRef(null)

    const scroll = () => {
        window.scrollTo({
            top: navbar.current.offsetTop,
            behavior: 'smooth' 
        })
    }

    const projects = () => {
        setShowBio(false)
        setShowEducation(false)
        setShowProjects(true)
        scroll()
    }

    const bio = () => {
        setShowBio(true)
        setShowEducation(false)
        setShowProjects(false)
        scroll()
    }

    const education = () => {
        setShowBio(false)
        setShowEducation(true)
        setShowProjects(false)
        scroll()
    }

    return (
        <div className={classes.main}>
            <div className={classes.body}>
                <Typography className={classes.heading}>
                    Hello!
                </Typography>
                <Typography className={classes.subheading}>
                    My Name is Joseph!
                </Typography>
                <Typography className={classes.about}>
                    I am a Penultimate-year Computer Science / Commerce Student Studying at UNSW
                </Typography>
                <div ref={navbar} className={classes.navbar}>
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
