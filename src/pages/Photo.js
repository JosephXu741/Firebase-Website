import React from 'react'
import {withStyles} from '@material-ui/core/styles';

const styles = {
    main: {
        height:"350px",
        width: "350px",
    }
}

function Photo(props) {
    const {classes, name, src} = props
    return (
        <div className={classes.main}>
            <img className={classes.main} src={src} alt={name} />
            <p>{name}</p>
            
        </div>
    )
}

export default withStyles(styles)(Photo)
