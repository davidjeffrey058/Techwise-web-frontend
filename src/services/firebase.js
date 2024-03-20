import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzhVh-xbyXETEPXjnHR4vsVXT-Etpyby8",
    authDomain: "techwise-5b269.firebaseapp.com",
    projectId: "techwise-5b269",
    storageBucket: "techwise-5b269.appspot.com",
    messagingSenderId: "803822514386",
    appId: "1:803822514386:web:50d4f28e44bcc8b8737d0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
