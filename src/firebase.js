import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDeOkNrBv-PeL7pLWf7_6sNMhMBCsJt2us",
  authDomain: "kuba-w.firebaseapp.com",
  projectId: "kuba-w",
  storageBucket: "kuba-w.appspot.com",
  messagingSenderId: "688099478725",
  appId: "1:688099478725:web:a9bf69bd35a6fa7a7d74ac",
  measurementId: "G-N7TBWJGFXB",
});

export default getFirestore();
