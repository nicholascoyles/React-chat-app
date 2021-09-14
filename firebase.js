import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyByK0dQsJRUCs7Vfdeec0JCnw1FcSQJpRE",
    authDomain: "chat-app-b8219.firebaseapp.com",
    projectId: "chat-app-b8219",
    storageBucket: "chat-app-b8219.appspot.com",
    messagingSenderId: "838827092671",
    appId: "1:838827092671:web:f85e36c521cbd94feaf40a"
  }).auth();