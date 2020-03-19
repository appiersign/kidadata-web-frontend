import * as firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDEKIf0bwZ4t3Ocy_2B1fAxFNzLBS6A_pI",
    authDomain: "kidadata-ab077.firebaseapp.com",
    databaseURL: "https://kidadata-ab077.firebaseio.com",
    projectId: "kidadata-ab077",
    storageBucket: "kidadata-ab077.appspot.com",
    messagingSenderId: "28440343965",
    appId: "1:28440343965:web:79ff22ca6c5ca455cd6b74",
    measurementId: "G-ZPFYRD9531"
};

firebase.initializeApp(firebaseConfig);

export default firebase;