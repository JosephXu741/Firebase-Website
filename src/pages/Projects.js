import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import Photo from "./Photo"
import {List, ListItem } from '@material-ui/core';
import firebase from "../firebase";

const styles = {
    main: {
        display: "grid",
        placeItmes: "center",
        gridTemplateColumns: "50% 50%",
    },
    photos: {
        gridColumns: "1/2",
        placeItems: "center",
        placeSelf: "center",
        paddingBottom: "50px",
        paddingTop: "16px",
    },
    content: {
        gridColumns: "2/3",
        placeItems: "center",
        fontFamily: "roboto",
        width: "500px",
    },
    heading: {
        fontSize: "30",
        fontWeight: "500"
    }
}

function Projects(props) {
    const {classes} = props

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         const usersCollection = await db.collection("Photos").get()
    //         setUsers(usersCollection.docs.map(doc => {
    //             return doc.data()
    //         }))
    //     }
    //     fetchUsers()
    // }, [])

    return (
        <div className={classes.main}>
            <div className={classes.photos}>
                <Photo name={"structs.sh"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/193028899_887721188489103_559145970860892502_n.png?alt=media&token=d1394fc4-b764-4698-a3c9-535dac8b2ce3"} />
            </div>
            <div className={classes.content}>
                <List>
                    <ListItem className={classes.heading}>
                        Structs - An Algorithm Visualiser
                    </ListItem>
                    <ListItem>
                        Designing a platform tailored for UNSW students that emphasizes on visual learning
                    </ListItem>
                    <ListItem>
                        The project mission is to create a user friendly website to complement UNSW courses, 
                        where each feature / animation has a purpose in the narrative
                    </ListItem>
                    <ListItem>
                        Our stack includes React, Nodejs, Express, and MongoDB, as well as React
                        Libraries such as Framer Motion and React Router. Other software engineering 
                        technologies include Figma for prototyping, Confluence to track tasks and progression
                        and Agile principles for productivity
                    </ListItem>
                    <ListItem>
                        This is a part of the 2021 CSE Projects Portfolio (deployable version coming soon!)
                    </ListItem>
                </List>
            </div>
            <div className={classes.photos}>
                <Photo name={"hackathon"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/Screenshot%202021-06-08%20220653.png?alt=media&token=d82f3297-606f-45d5-84f9-4285950a26a4"} />
            </div>
            <div className={classes.content}>
                <List>
                    <ListItem className={classes.heading}>
                        CSE Hackathon 
                    </ListItem>
                    <ListItem>
                        peepeepoopoo
                    </ListItem>
                </List>
            </div>
            <div className={classes.photos}>
                <Photo name={"afterpay"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/afterpay_1611164662.png?alt=media&token=ee875646-1e5f-47a8-8b0c-6369ca8dd748"}  />
            </div>
            <div className={classes.content}>
                <List>
                    <ListItem className={classes.heading}>
                        Case Comp
                    </ListItem>
                    <ListItem>
                        peepeepoopoo
                    </ListItem>
                </List>
            </div>
        </div>
    )
}

export default withStyles(styles)(Projects)
