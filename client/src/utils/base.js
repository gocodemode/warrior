import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAjfv6bOQwlpJuKndsRLKZORFh1EuQ85E0",
    authDomain: "warrior-auth.firebaseapp.com",
    databaseURL: "https://warrior-auth.firebaseio.com",
    projectId: "warrior-auth",
    storageBucket: "warrior-auth.appspot.com",
    messagingSenderId: "120655587806",
    appId: "1:120655587806:web:17c5b04dd95505cc55954f",
    measurementId: "G-HZC3E8HPSY"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
export const firestore = firebase.firestore();
export default app;