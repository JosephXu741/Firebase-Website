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
import {motion, AnimatePresence} from 'framer-motion'

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
        fontSize:"7vw",
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
    const [next, setNext] = useState(null)
    const [showBio, setShowBio] = useState(true)
    const navbar = useRef(null)

    const scroll = () => {
        window.scrollTo({
            top: navbar.current.offsetTop,
            behavior: 'smooth' 
        })
    }

    const projects = async () => {
        await setNext("right")
        setShowBio(false)
        setShowEducation(false)
        setShowProjects(true)
        scroll()
    }

    const bio = async () => {
        await setNext("left")
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

    const variants = {
        hidden: {
            opacity: 0,
            y: -100
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.5,
                duration: 0.1,
                when: "beforeChildren"
            }
        },
    }
    const children = {
        hidden: {
            y: -100,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7
            }
        }
    }

    return (
        <div className={classes.main}>
            <motion.div 
                animate={"visible"} 
                initial={"hidden"}
                variants={variants}
                className={classes.body}
            >
                <motion.div variants={children}>
                    <Typography className={classes.heading}>
                        Hello!
                    </Typography>
                </motion.div>
                <motion.div variants={children}>
                <Typography className={classes.subheading}>
                    My Name is Joseph!
                </Typography>
                </motion.div>
                <motion.div variants={children}>
                <Typography className={classes.about}>
                    I am a Penultimate-year Computer Science / Commerce Student Studying at UNSW
                </Typography>
                </motion.div>
                <motion.div variants={children}>
                <div ref={navbar} className={classes.navbar}>
                    <Navbar functions={{projects, bio, education}}/>
                </div>
                </motion.div> 
                <div className={classes.content}>
                    <AnimatePresence>
                        {showProjects && <motion.div
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1, transition: {delay:1}}}
                                            exit={{opacity: 0, x: 500, transition:{duration: 1}}}
                                            key="1"
                                        ><Projects /></motion.div>}
                        {showEducation && <motion.div
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1, transition: {delay:1}}}
                                            exit={{opacity: 0, x: next === "left" ? 500 : -500, transition:{duration: 1}}}
                                            key="2"
                                        ><Education /></motion.div>}
                        {showBio && <motion.div
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1, transition: {delay:1}}}
                                            exit={{opacity: 0, x: -500, transition:{duration: 1}}}
                                            key="3"
                                        ><About /></motion.div>}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    )
}

export default withStyles(styles)(Home)
