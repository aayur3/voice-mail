import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhICp72HKRf--Dlsp8peGYP8I4FAJO13A",
  authDomain: "voice-mail-c0f05.firebaseapp.com",
  projectId: "voice-mail-c0f05",
  storageBucket: "voice-mail-c0f05.appspot.com",
  messagingSenderId: "145891682616",
  appId: "1:145891682616:web:829b543a9bde3c1017f9cd",
  measurementId: "G-PG88JXJ9PM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export const db = firebaseApp.firestore();
export const Provider = new firebase.auth.GoogleAuthProvider();

