import { Typography } from '@material-ui/core'
import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import Photo from "./Photo"

const styles = {
    main: {
        display: "grid",
        placeItmes: "center",
    },
    photo: {
        display: "grid",
        gridTemplateColumns: "50% 50%",
        placeItems: "center",
        placeSelf: "center",
        paddingBottom: "50px",
        paddingTop: "16px"
    },
    bio: {
        width: "400px",
        paddingLeft: "140px"
    },
    sectionHeading: {
        placeSelf: "center",
        paddingBottom: "60px",
        textDecoration: "underline"
    },
    collage: {
        gridTemplateColumns: "repeat(2, 1fr)",
        display: "grid",
        placeItems: "center",
        gap: "40px 0px",
        paddingBottom: "200px"

    }


}

function About(props) {
    const {classes} = props

    return (
        <div className={classes.main}>

            <div className={classes.photo}>
                <Photo />
                <div className={classes.bio}>
                 <Typography>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum urna nulla, sed ultrices purus tempus lacinia. Praesent finibus dui sit amet diam porttitor, non dapibus diam vestibulum. Curabitur fringilla nec mauris et volutpat. Phasellus est risus, molestie at sapien vitae, pulvinar fermentum purus. Aenean ut lobortis enim, nec placerat risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas tincidunt gravida enim. Integer aliquet eleifend imperdiet. Donec vel egestas nisl. Mauris a ultricies nisi.
                 </Typography>
                </div>
            </div>
            <Typography variant="h3" className={classes.sectionHeading}>
            Work Experience
            </Typography>
            <div className={classes.photo}>
                <Photo />
                <div className={classes.bio}>
                 <Typography>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum urna nulla, sed ultrices purus tempus lacinia. Praesent finibus dui sit amet diam porttitor, non dapibus diam vestibulum. Curabitur fringilla nec mauris et volutpat. Phasellus est risus, molestie at sapien vitae, pulvinar fermentum purus. Aenean ut lobortis enim, nec placerat risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas tincidunt gravida enim. Integer aliquet eleifend imperdiet. Donec vel egestas nisl. Mauris a ultricies nisi.
                 </Typography>
                </div>
            </div>
            <div className={classes.photo}>
                <Photo />
                <div className={classes.bio}>
                 <Typography>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum urna nulla, sed ultrices purus tempus lacinia. Praesent finibus dui sit amet diam porttitor, non dapibus diam vestibulum. Curabitur fringilla nec mauris et volutpat. Phasellus est risus, molestie at sapien vitae, pulvinar fermentum purus. Aenean ut lobortis enim, nec placerat risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas tincidunt gravida enim. Integer aliquet eleifend imperdiet. Donec vel egestas nisl. Mauris a ultricies nisi.
                 </Typography>
                </div>
            </div>
            <div className={classes.photo}>
                <Photo />
                <div className={classes.bio}>
                 <Typography>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum urna nulla, sed ultrices purus tempus lacinia. Praesent finibus dui sit amet diam porttitor, non dapibus diam vestibulum. Curabitur fringilla nec mauris et volutpat. Phasellus est risus, molestie at sapien vitae, pulvinar fermentum purus. Aenean ut lobortis enim, nec placerat risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas tincidunt gravida enim. Integer aliquet eleifend imperdiet. Donec vel egestas nisl. Mauris a ultricies nisi.
                 </Typography>
                </div>
            </div>

            <Typography variant="h3" className={classes.sectionHeading}>
            Six Of My Photos That Best Describe Me
            </Typography>

            <div className={classes.collage}>
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />

            </div>


        </div>
    )
}

export default withStyles(styles) (About)
