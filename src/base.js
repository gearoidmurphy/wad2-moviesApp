import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAQWKcUGZU1mT5vFHu6zQq0M1MwOYufd5E",
    authDomain: "fir-reactapp-432ef.firebaseapp.com",
    projectId: "fir-reactapp-432ef",
    storageBucket: "fir-reactapp-432ef.appspot.com",
    messagingSenderId: "7834867777",
    appId: "1:7834867777:web:6c2e0717ac3a5e16abcec0",
    measurementId: "G-WWWNH3BD6D"
});

export default app;