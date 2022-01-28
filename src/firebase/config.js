import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANkvx5ASMHQ0wORpBn7b-2KxUXuT4vzhk",
  authDomain: "stacks-mon.firebaseapp.com",
  projectId: "stacks-mon",
  storageBucket: "stacks-mon.appspot.com",
  messagingSenderId: "630231347968",
  appId: "1:630231347968:web:6c151bba573e0a6fbab9e5",
  measurementId: "G-8S3DSCS9S7",
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
//projectFirestore can be any variable, but we will use this variable to connect with the firestore database
const projectAuth = firebase.auth();
//import authientication from firebase

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
