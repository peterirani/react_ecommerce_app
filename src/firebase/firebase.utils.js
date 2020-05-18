import firebase from "firebase/app";

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBVQcHjmtVtuSn-LMHZtKk5f6aQuOsUpqs",
    authDomain: "pi2019-react-ecommerce.firebaseapp.com",
    databaseURL: "https://pi2019-react-ecommerce.firebaseio.com",
    projectId: "pi2019-react-ecommerce",
    storageBucket: "pi2019-react-ecommerce.appspot.com",
    messagingSenderId: "927796097845",
    appId: "1:927796097845:web:2f4ee24616a891f3ac927c",
    measurementId: "G-ENWBEVFG1M"
};

firebase.initializeApp(config);