import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Typography} from '@material-ui/core';

const styles = {
    main: {
        fontFamily: "roboto",
        fontSize: "20px",
    },
    paper: {
        display: "grid",
        backgroundColor: "#e1e5ea",
        padding: '6px 15px',
        width: "25vw",
        justifySelf: "end",
        fontSize: "16",
        paddingBottom: "30px",
        "& p": {
            marginBottom: "5"
        }
    },
    left: {
        display: "grid",
    },
    title: {
        display: "grid",
        placeItems: "center"
    },
    bold: {
        fontWeight: "900"
    }


}

function Education(props) {
    const {classes} = props
    return (
        <div className={classes.main}>
            <Typography variant="h6" className={classes.title}>
                Current Wam: 79
            </Typography>
            <Timeline align="alternate">
            <TimelineItem>
                <TimelineOppositeContent>

                </TimelineOppositeContent>
                <TimelineSeparator>

                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Paper elevation={0} className={classes.paper}>
                <p>Algorithms & Programming Techniques</p>
                <p>Financial Market Data Design & Analysis</p>
                <p>Banking, Finance & Technology</p>
                </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>

                2021 T2

                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot color="primary">
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className={classes.left}>
                <Paper elevation={0} className={classes.paper}>
                <p>Data Warehousing & Data Mining (83)</p>
                <p className={classes.bold} >Capital Markets & Institutions (86)</p>
                </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
            <TimelineOppositeContent>

            2021 T1

            </TimelineOppositeContent>  
                <TimelineSeparator>
                <TimelineDot color="primary" >
                </TimelineDot >
                <TimelineConnector  />
                </TimelineSeparator>
                <TimelineContent>
                <Paper elevation={0} className={classes.paper}>
                <p className={classes.bold} >Database Systems (94)</p>
                <p>Portfolio Management (73)</p>
                </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
            <TimelineOppositeContent>
            2020 T3

            </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot color="secondary">
                </TimelineDot>
                <TimelineConnector  />
                </TimelineSeparator>
                <TimelineContent className={classes.left}>
                <Paper elevation={0} className={classes.paper}>
                <p>Intro to Databases for Business (70)</p>
                <p className={classes.bold} >Computer System Fundamentals (87)</p>
                <p className={classes.bold} >Data Structures & Algorithms (96)</p>
                </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                2020 T2
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot color="secondary">
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Paper elevation={0} className={classes.paper}>
                <p>Software Engineering Fundamentals ( P ) * Was Pass/Fail To account for online learning</p>
                <p>Macroeconomics (76)</p>
                <p>Marketing Fundamentals (70)</p>
                </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>

                2020 T1

                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot color="secondary">
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className={classes.left}>
                <Paper elevation={0} className={classes.paper}>
                <p>Programming Fundamentals (82)</p>
                <p>Business Finance (79)</p>
                </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
            <TimelineOppositeContent>

            2019 T3

            </TimelineOppositeContent>  
                <TimelineSeparator>
                <TimelineDot color="#8e24aa" >
                </TimelineDot>
                <TimelineConnector  />
                </TimelineSeparator>
                <TimelineContent>
                <Paper elevation={0} className={classes.paper}>
                <p>Discrete Mathematics (72)</p>
                <p>Managing Organisations & People (64)</p>
                <p>Higher Mathematics B (80)</p>
                </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
            <TimelineOppositeContent>

            2019 T2

            </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot color="#8e24aa">
                </TimelineDot>
                <TimelineConnector  />
                </TimelineSeparator>
                <TimelineContent className={classes.left}>
                <Paper elevation={0} className={classes.paper}>
                <p>Accounting & Financial Management (71)</p>
                <p>Microeconomics (80)</p>
                <p>Higher Mathematics A (79)</p>
                </Paper>
                </TimelineContent>

            </TimelineItem>
            <TimelineItem>
            <TimelineOppositeContent>
            2019 T1
            </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot color="#111111">
                </TimelineDot>
                </TimelineSeparator>
                <TimelineContent className={classes.left}>
                <Paper elevation={0} className={classes.paper}>
                </Paper>
                </TimelineContent>

            </TimelineItem>
            
            </Timeline>
        </div>
    )
}



export default withStyles(styles)(Education)
