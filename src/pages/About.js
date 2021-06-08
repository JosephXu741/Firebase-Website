import { Typography } from '@material-ui/core'
import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import Photo from "./Photo"
import firebase from "../firebase";


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
                <Photo name={"bio"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/DSC02345.JPG?alt=media&token=cf3286ea-3b89-42b1-9530-e2bfbdbddf51"}/>
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
                <Photo name={"Maccas"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/194085825_318493979889736_2658701469475096280_n.jpg?alt=media&token=ddc928ec-2545-4222-87b3-78ced397f9c0"} />
                <div className={classes.bio}>
                 <Typography>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum urna nulla, sed ultrices purus tempus lacinia. Praesent finibus dui sit amet diam porttitor, non dapibus diam vestibulum. Curabitur fringilla nec mauris et volutpat. Phasellus est risus, molestie at sapien vitae, pulvinar fermentum purus. Aenean ut lobortis enim, nec placerat risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas tincidunt gravida enim. Integer aliquet eleifend imperdiet. Donec vel egestas nisl. Mauris a ultricies nisi.
                 </Typography>
                </div>
            </div>
            <div className={classes.photo}>
                <Photo name={"coffee"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/196088949_197834972201853_553927757694299212_n.jpg?alt=media&token=a731515c-dd84-472e-b008-719f4c926d12"} />
                <div className={classes.bio}>
                 <Typography>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum urna nulla, sed ultrices purus tempus lacinia. Praesent finibus dui sit amet diam porttitor, non dapibus diam vestibulum. Curabitur fringilla nec mauris et volutpat. Phasellus est risus, molestie at sapien vitae, pulvinar fermentum purus. Aenean ut lobortis enim, nec placerat risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas tincidunt gravida enim. Integer aliquet eleifend imperdiet. Donec vel egestas nisl. Mauris a ultricies nisi.
                 </Typography>
                </div>
            </div>
            <div className={classes.photo}>
            {/* Photo by <a href="https://unsplash.com/@scienceinhd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Science in HD</a> on <a href="https://unsplash.com/collections/9895073/water-systems-technology?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
                <Photo name={"maths"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/science-in-hd-aYxQrt5J6jM-unsplash.jpg?alt=media&token=82df2bae-6610-4eb0-a122-ff386ee95e44"} />
                <div className={classes.bio}>
                 <Typography>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum urna nulla, sed ultrices purus tempus lacinia. Praesent finibus dui sit amet diam porttitor, non dapibus diam vestibulum. Curabitur fringilla nec mauris et volutpat. Phasellus est risus, molestie at sapien vitae, pulvinar fermentum purus. Aenean ut lobortis enim, nec placerat risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas tincidunt gravida enim. Integer aliquet eleifend imperdiet. Donec vel egestas nisl. Mauris a ultricies nisi.
                 </Typography>
                </div>
            </div>

            <Typography variant="h3" className={classes.sectionHeading}>
            Me in Six Photos
            </Typography>

            <div className={classes.collage}>
                <Photo name={"sunrise"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/DSC04082.JPG?alt=media&token=6addfb86-13f4-449c-8066-46a3e507c9ac"} />
                <Photo name={"light"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/IMG_7735.JPG?alt=media&token=d94ef286-b764-4129-afc9-eb539dd16b24"} />
                <Photo name={"cat"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/DSC_0078.JPG?alt=media&token=3f78b33c-3a17-475b-bbe8-db0f2a709a78"} />
                <Photo name={"stars"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/IMG_5997.JPG?alt=media&token=a39128b3-6ef9-48d2-8697-0fe4725fc04a"} />
                <Photo name={"sunset"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/received_414965896541445.jpeg?alt=media&token=f7a331de-0f90-44f1-b756-a315e994f156"} />
                <Photo name={"uts"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/square.jpg?alt=media&token=2451f702-c5e8-4332-ac55-ee1679e71e6c"} />

            </div>


        </div>
    )
}

export default withStyles(styles) (About)
