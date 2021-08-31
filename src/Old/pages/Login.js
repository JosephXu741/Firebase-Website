import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import Navbar from "./Navbar"

const styles = {
    main: {
        display: "grid",
        height: "100vh",
        width: "100vw",
        placeItems: "center"
    }
}

function Login(props) {
    const {classes} = props
    return (
        <div className={classes.main}>
            <Navbar />
            <form>

            </form>
        </div>
    )
}

export default withStyles(styles)(Login)
