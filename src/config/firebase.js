import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBD7ur_rWNjAXf5PRgS6LkUqrAcuv6jV6Y",
  authDomain: "cryptune-app.firebaseapp.com",
  projectId: "cryptune-app",
  storageBucket: "cryptune-app.appspot.com",
  messagingSenderId: "1054441799888",
  appId: "1:1054441799888:web:a33449ebf4a4e5d9661ed5",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

export {firebase, db, auth, storage };
