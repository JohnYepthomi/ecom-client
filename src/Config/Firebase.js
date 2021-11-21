import firebase from 'firebase/app'
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  });

  export const auth = app.auth();
  export const projectStorage = firebase.storage();
  export const projectFirestore = firebase.firestore();
  export default app;
