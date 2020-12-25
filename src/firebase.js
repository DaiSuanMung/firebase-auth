import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBxMfH87NQDw0uuGiOPFgUnOwwrsWpw37c",
    authDomain: "login-6b9fe.firebaseapp.com",
    projectId: "login-6b9fe",
    storageBucket: "login-6b9fe.appspot.com",
    messagingSenderId: "847696931642",
    appId: "1:847696931642:web:85fd063e7cb8fd8be43e03"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const firebaseAuth = firebaseApp.auth();

  export {
    firebaseApp, firebaseAuth, firebase 
  }