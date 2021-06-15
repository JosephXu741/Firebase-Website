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
        paddingTop: "16px",
        "@media (max-width: 1000px)" : {
            gridTemplateColumns: "100%",
        }
    },
    bio: {
        width: "400",
        paddingLeft: "120px",
        alignItems: "start",
        textAlign: "center",
        "@media (max-width: 1000px)" : {
            paddingLeft: 0,
            width: 350,
            height: "auto",
            paddingTop: 50,
            textAlign: "center"
        }

    },
    sectionHeading: {
        placeSelf: "center",
        paddingBottom: "60px",
        textAlign: "center"
    },
    collage: {
        gridTemplateColumns: "repeat(2, 1fr)",
        display: "grid",
        placeItems: "center",
        gap: "40px 0px",
        paddingBottom: "200px",
        "@media (max-width: 760px)" : {
            gridTemplateColumns: "100%",
        }

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
                <Photo name={"bio"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/Static%2FDSC02345.jpg?alt=media&token=ad08e3a1-7ccf-4639-b4ea-aa1144585c1d"}/>
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
                <Photo name={"Maccas"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/Static%2F194085825_318493979889736_2658701469475096280_n.jpg?alt=media&token=762e89f6-a1b6-4bc9-a77c-7f8746016362"} />
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
                <Photo name={"maths"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/Static%2Fscience-in-hd-aYxQrt5J6jM-unsplash.jpg?alt=media&token=1d1cea93-5674-4dc8-b33b-546d42412e01"} />
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
                <Photo name={"coffee"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/Static%2F196088949_197834972201853_553927757694299212_n.jpg?alt=media&token=64a77184-f58a-4981-bd16-eeb477d57ce6"} />
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
                <Photo name={"sunrise"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/Static%2FDSC04082.jpg?alt=media&token=e86b98c4-b940-4b3f-88f4-c7a5aab8a13a"} />
                <Photo name={"light"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/Static%2FIMG_7735.jpg?alt=media&token=1eb9a480-dabb-41f7-ab49-6a80ff6e4872"} />
                <Photo name={"cat"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/Static%2FDSC_0078.jpg?alt=media&token=68d3018e-ab8b-4fc9-9bf5-64b553ed9620"} />
                <Photo name={"stars"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/Static%2FIMG_5997.jpg?alt=media&token=db8b09bd-fad1-4739-8709-d934caaca0fc"} />
                <Photo name={"sunset"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/Static%2Freceived_414965896541445.jpg?alt=media&token=a330d453-bf48-4c70-95bd-4bf7e6cb824d"} />
                <Photo name={"uts"} src={"https://firebasestorage.googleapis.com/v0/b/website-8fcd4.appspot.com/o/Static%2Fsquare.jpg?alt=media&token=a6a82847-688a-4665-9724-6aade9756722"} />

            </div>


        </div>
    )
}

export default withStyles(styles) (About)
