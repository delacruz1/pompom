import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB8NwV1ex--_txOVagqE98js_-p7evnXvY",
    authDomain: "pompom-a6452.firebaseapp.com",
    projectId: "pompom-a6452",
    storageBucket: "pompom-a6452.appspot.com",
    messagingSenderId: "1046018079678",
    appId: "1:1046018079678:web:bf607aefe51db12cdd97ef",
    measurementId: "G-DRSJHL6NCM"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};