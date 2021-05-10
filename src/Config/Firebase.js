import firebase from 'firebase/app'
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDYcfBOw3upax9SSV_0Ho148QT-55TrqW4",
    authDomain: "ecom-test-61fc1.firebaseapp.com",
    databaseURL: "https://ecom-test-61fc1.firebaseio.com",
    projectId: "ecom-test-61fc1",
    storageBucket: "ecom-test-61fc1.appspot.com",
    messagingSenderId: "662690549399",
    appId: "1:662690549399:web:c85a62cedabc02dfe923d2"
  });

  export const auth = app.auth();
  export const projectStorage = firebase.storage();
  export const projectFirestore = firebase.firestore();
  export default app;
