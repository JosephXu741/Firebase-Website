import React, {useState, useEffect} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Photo from './Photo.js';
import Navbar from './Navbar.js';
import firebase from "../firebase";

const styles = {
    main: {
        background: "#fafafa",
        display: "grid",
        width:"100vw",
        height: "100vh",
        grid: "repeat(3, 400px) / 25% 50% 25%",
        placeItems: "center",
        "& navbar" : {
            gridColumn: "1/6"
        },
        "& .photos": {
            gridColumn: "2/3",
            gridRow: "2",
            gridTemplateColumns: "repeat(3, 1fr)",
            display: "grid",
            placeItems: "center",
            gap: "20px 20px"
        }
    }
}

const db = firebase.firestore();

function Landing(props) {
    const {classes} = props
    const [fileUrl, setFileUrl] = useState(null);
    const [users, setUsers] = useState([]);

    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        setFileUrl(await fileRef.getDownloadURL());

    }

    const onSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        if (!username) {
            return
        }
        db.collection("Photos").doc(username).set({
            name:username,
            photo:fileUrl
        })
    }

    useEffect(() => {
        const fetchUsers = async () => {
            const usersCollection = await db.collection("Photos").get()
            setUsers(usersCollection.docs.map(doc => {
                return doc.data()
            }))
        }
        fetchUsers()
    }, [])

    return (
        <div className={classes.main}>
            
            <div className="navbar">
                <Navbar /> 
            </div>
            <form onSubmit={onSubmit}>
                <input type="file" onChange={onFileChange} />
                <input type="text" name="username" />
                <button>Submit</button>
            </form>
            <div className="photos">
                {
                    users.map(user => {
                        return <Photo src={user.photo} name={user.name}/>
                    })
                }
            </div>
        </div>
    )
}

export default withStyles(styles)(Landing);
