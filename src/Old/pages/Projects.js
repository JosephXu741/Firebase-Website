import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import Photo from "./Photo"
import {List, ListItem } from '@material-ui/core';

const styles = {
    main: {
        display: "grid",
    },
    photos: {
        display: "grid",
        gridTemplateColumns: "50% 50%",
        placeItems: "center",
        placeSelf: "center",
        paddingBottom: "50px",
        paddingTop: "16px",
        "@media (max-width: 1000px)" : {
            gridTemplateColumns: "100%",
        }
    },
    bio: {
        width: "400",
        paddingLeft: "120px",
        alignItems: "start",
        "@media (max-width: 1000px)" : {
            paddingLeft: 0,
            width: 350,
            height: "auto",
            paddingTop: 50,
            textAlign: "center"
        }

    },
    heading: {
        fontSize: "30",
        fontWeight: "500",
        alignItems: "start"
    },
}


function Projects(props) {
    const {classes} = props

    return (
        <div className={classes.main}>
            <div className={classes.photos}>
                <Photo name={"structs.sh"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/Static%2F193028899_887721188489103_559145970860892502_n.jpg?alt=media&token=62a3085e-e162-4a28-8604-ca1953a03ca2"} />
                <List className={classes.bio}>
                    <ListItem className={classes.heading}>
                        Structs - An Algorithm Visualiser
                    </ListItem>
                    <ListItem>
                        Designing a platform tailored for UNSW students that emphasizes visual learning.
                    </ListItem>
                    <ListItem>
                        The project mission is to create a user friendly website to complement UNSW courses, 
                        where each feature / animation has a purpose in the learning process.
                    </ListItem>
                    <ListItem>
                        Our stack includes React, Nodejs, Express, and MongoDB, as well as React
                        Libraries such as Framer Motion and React Router. Other software engineering 
                        technologies include Figma for prototyping, Confluence to track tasks and progression
                        and Agile principles for productivity.
                    </ListItem>
                    <ListItem>
                        This is a part of the 2021 CSE Projects Portfolio. (deployable version coming soon!)
                    </ListItem>
                </List>
            </div>
            <div className={classes.photos}>
                <Photo name={"hackathon"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/Static%2FScreenshot%202021-06-08%20220653.jpg?alt=media&token=41be5a56-5a98-47c7-95d3-651c8a0f8e4a"} />
                <List className={classes.bio}>
                    <ListItem className={classes.heading}>
                        CSE Hackathon - 2020
                    </ListItem>
                    <ListItem>
                        Prompt: "Create a Product that will Assist and Relieve the Effects of the Coronavirus".
                    </ListItem>
                    <ListItem>
                        Our team aimed to assist the propagation of information about the virus through 
                        a mobile subscription service, where an individual will receive a text message
                        if a case occurs in their surrounding neighbourhood.
                    </ListItem>
                    <ListItem>
                        Users will save time scouring through NSW's website to search for their specific 
                        location, increasing their accessibility to information.
                    </ListItem>
                    <ListItem>
                        Information was gathered using a webscraper, and the subscription was available
                        through a website.
                    </ListItem>
                </List>
            </div>
            <div className={classes.photos}>
                <Photo name={"afterpay"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/Static%2Fafterpay_1611164662.jpg?alt=media&token=98916bb1-50c5-48ea-a4f5-897dc8fe0970"}  />
                <List  className={classes.bio}>
                    <ListItem className={classes.heading}>
                        Case Comp - Government Consulting
                    </ListItem>
                    <ListItem>
                        Stimulus: "You are a consulting firm and you are to present a report to NSW Government
                        about how relieving the financial strain of the household sector. In your report
                        discuss how Afterpay's balance sheet affects this".
                    </ListItem>
                    <ListItem>
                        Finalists.
                    </ListItem>
                </List>
            </div>
        </div>
    )
}

export default withStyles(styles)(Projects)
