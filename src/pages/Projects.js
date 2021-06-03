import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import Photo from "./Photo"
import { Typography } from '@material-ui/core';

const styles = {
    main: {
        display: "grid",
        placeItmes: "center",
        gridTemplateColumns: "50% 50%"
    },
    photos: {
        gridColumns: "1/2",
        placeItems: "center",
        placeSelf: "center"
    },
    content: {
        gridColumns: "2/3",
        placeItems: "center",
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
                <Typography>
                    peepeepoeepoee
                </Typography>
            </div>
            <div className={classes.photos}>
                <Photo />
            </div>
            <div className={classes.content}>
                <Typography>
                    peepeepoeepoee
                </Typography>
            </div>

        </div>
    )
}

export default withStyles(styles)(Projects)
