import React from 'react'
import {withStyles} from '@material-ui/core/styles';

const styles = {
    main: {
        height:"350px",
        width: "350px",
        objectFit: "cover"
    }
}

function Photo(props) {
    // Need to implement Crop feature instead of resizing my image
    const {classes, name, src} = props
    return (
        <div className={classes.main}>
            <img className={classes.main} src={src} alt={name} />
        </div>
    )
}

export default withStyles(styles)(Photo)
