import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDSi2a2MimDbfSZXfvvyrvLybnSR0-cobg",
    authDomain: "website-8fcd4.firebaseapp.com",
    databaseURL: "https://website-8fcd4-default-rtdb.firebaseio.com",
    projectId: "website-8fcd4",
    storageBucket: "website-8fcd4.appspot.com",
    messagingSenderId: "199357385599",
    appId: "1:199357385599:web:aeb2ffdfe95bfb22ef284a",
    measurementId: "G-5VT44FMY08"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;