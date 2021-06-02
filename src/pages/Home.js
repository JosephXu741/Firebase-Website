import React, {useState, useEffect} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Navbar from './Navbar.js';
import { Typography } from '@material-ui/core';
import "@fontsource/roboto"
import "@fontsource/roboto-slab"
import "react-social-icons"

const styles = {
    main: {
        background: "#e1e5ea",
        display: "grid",
        width:"100vw",
        height: "100vh",
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
        "& .navbar": {
            placeItems: "center"
        }
    },
}





function Home(props) {
    const {classes} = props
    console.log()




    return (
        <div className={classes.main}>
            <div className="body-div">
                <Typography className="heading">
                    Hello! My name is Joseph!
                </Typography>
                <Typography className="about">
                    I am a third-year Computer Science / Commerce student 
                </Typography>
                <div className="navbar">
                    <Navbar />
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(Home)
