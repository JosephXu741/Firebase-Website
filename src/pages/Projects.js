import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import Photo from "./Photo"
import { Typography, List, ListItem } from '@material-ui/core';

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
        paddingTop: "16px"
    },
    content: {
        gridColumns: "2/3",
        placeItems: "center",
        fontFamily: "roboto"
    },
    heading: {
        fontSize: "30",
        fontWeight: "500"
    }
}

function Projects(props) {
    const {classes} = props

    return (
        <div className={classes.main}>
            <div className={classes.photos}>
                <Photo />
            </div>
            <div className={classes.content}>
                <List>
                    <ListItem className={classes.heading}>
                        peepeepoopoo
                    </ListItem>
                    <ListItem>
                        peepeepoopoo
                    </ListItem>
                </List>
            </div>
            <div className={classes.photos}>
                <Photo />
            </div>
            <div className={classes.content}>
                <List>
                    <ListItem className={classes.heading}>
                        peepeepoopoo
                    </ListItem>
                    <ListItem>
                        peepeepoopoo
                    </ListItem>
                </List>
            </div>
            <div className={classes.photos}>
                <Photo />
            </div>
            <div className={classes.content}>
                <List>
                    <ListItem className={classes.heading}>
                        peepeepoopoo
                    </ListItem>
                    <ListItem>
                        peepeepoopoo
                    </ListItem>
                </List>
            </div>
            <div className={classes.photos}>
                <Photo />
            </div>
            <div className={classes.content}>
                <List>
                    <ListItem className={classes.heading}>
                        peepeepoopoo
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
