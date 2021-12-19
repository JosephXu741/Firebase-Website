import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
// import { getStorage, ref, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDSi2a2MimDbfSZXfvvyrvLybnSR0-cobg",
    authDomain: "website-8fcd4.firebaseapp.com",
    projectId: "website-8fcd4",
    databaseURL: "https://website-8fcd4-default-rtdb.firebaseio.com",
    storageBucket: "website-8fcd4.appspot.com",
  };
  
initializeApp(firebaseConfig);

const db = getFirestore()
// const storage = getStorage();

const GetProjectRender = async (id) => {
    const docRef = doc(db, "projects", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    }
    else {
        return null
    }
}

const GetProjects = async () => {
    const querySnapshot = await getDocs(collection(db, "projects"))
    const result = querySnapshot.docs.map(doc => (
        doc.data()
    ))

    return result
}

const GetAnimation = async (ref) => {
    const result  = await fetch(ref)

    return result
}

export {GetProjectRender, GetProjects, GetAnimation}