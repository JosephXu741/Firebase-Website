import { Typography } from '@material-ui/core'
import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import Photo from "./Photo"
import {List, ListItem } from '@material-ui/core';


const styles = {
    main: {
        display: "grid",

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
        width: "500px",
        paddingLeft: "120px",
        alignItems: "start"

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

    },
    font: {
        fontSize: 19,

    },
    heading: {
        fontSize: "30",
        fontWeight: "500",
        alignItems: "start"
    }


}

function About(props) {
    const {classes} = props

    return (
        <div className={classes.main}>

            <div className={classes.photo}>
                <Photo name={"bio"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/DSC02345.JPG?alt=media&token=cf3286ea-3b89-42b1-9530-e2bfbdbddf51"}/>
                <div className={classes.bio}>
                 <Typography className={classes.font}>
                    My main interests lie in Artificial Intelligence, Machine Learning and Data Analysis,
                    as well as FinTech and full stack web development. Here, you can find my portfolio
                    presented in an informal way, in an attempt to make it more visual and engaging. 
                    I strongly believe that story telling is an essential skill and this website is my 
                    attempt at doing so. My technical skills include Python, C, Javascript and SQL.
                 </Typography>
                </div>
            </div>
            <Typography variant="h3" className={classes.sectionHeading}>
            Work Experience
            </Typography>
            <div className={classes.photo}>
                <Photo name={"Maccas"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/194085825_318493979889736_2658701469475096280_n.jpg?alt=media&token=ddc928ec-2545-4222-87b3-78ced397f9c0"} />
                <List className={classes.bio} >
                    <ListItem className={classes.heading}>
                        Shift Manager - McDonalds (2019 - Present)
                    </ListItem>
                    <ListItem>
                        I started this job in 2015 and quickly became a customer experience leader
                    </ListItem>
                    <ListItem>
                        Shortly after, my seniors offered a select group of employees to partake 
                        in a sponsored apprenticeship in conjuction with the HSC
                    </ListItem>
                    <ListItem>
                        After studying retail for two years, I graduated high-school with 
                        a Certificate III in retail operations and was offered a management 
                        position at my store
                    </ListItem>
                    <ListItem>
                        Although I have gained invaluable experience in this position, 
                        I am currently focused on entering the Computer Science Industry
                        to progress my career
                    </ListItem>
                </List>
            </div>
            <div className={classes.photo}>
            {/* Photo by <a href="https://unsplash.com/@scienceinhd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Science in HD</a> on <a href="https://unsplash.com/collections/9895073/water-systems-technology?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
                <Photo name={"maths"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/science-in-hd-aYxQrt5J6jM-unsplash.jpg?alt=media&token=82df2bae-6610-4eb0-a122-ff386ee95e44"} />
                <List className={classes.bio} >
                    <ListItem className={classes.heading}>
                        Private Tutor (2019 - Present)
                    </ListItem>
                    <ListItem>
                        From word of mouth, I was offered to Private tutor several students 
                        Mathematics 
                    </ListItem>
                    <ListItem>
                        I planned lesson structures and created homework material from 
                        textbooks as well as creating comprehensive lesson notes for my
                        students
                    </ListItem>
                </List>
            </div>
            <div className={classes.photo}>
                <Photo name={"coffee"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/196088949_197834972201853_553927757694299212_n.jpg?alt=media&token=a731515c-dd84-472e-b008-719f4c926d12"} />
                <List className={classes.bio} >
                    <ListItem className={classes.heading}>
                        Head Barista - The Black Groodle (2018 - 2019)
                    </ListItem>
                    <ListItem>
                        With the purpose of filling up my spare time post-HSC, I was offered a
                        temporary full-time position at a Cafe.
                    </ListItem>
                    <ListItem>
                        This job was my hobby job, the skills I had gained from McDondalds 
                        easily transferred over. 
                    </ListItem>
                    <ListItem>
                        I gained experience in forming meaningful relationships with regualar
                        customers, which were mostly office workers
                    </ListItem>
                    <ListItem>
                        My favourite quote from my boss: "The difference between a coffee maker
                         and a Barista lies within the relationship with your customers"
                    </ListItem>
                </List>
            </div>

            <Typography variant="h3" className={classes.sectionHeading}>
            Me encapsulated in Six Photos
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
