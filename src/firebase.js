import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import  { useAuthState }  from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  piKey: "AIzaSyBndXQ5Qd1v-5o6OudHnQiAGPf0RwEVN34",
  authDomain: "hansu-dev.firebaseapp.com",
  projectId: "hansu-dev",
  storageBucket: "hansu-dev.appspot.com",
  messagingSenderId: "691784364087",
  appId: "1:691784364087:web:d717ffedc158670e02cfb2",
  measurementId: "G-83TFJBF4SB"
});

export default getFirestore();