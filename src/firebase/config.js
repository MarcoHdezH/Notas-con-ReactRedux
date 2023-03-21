import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDls2VFmsJ0m6IRg4F0FaZeY545pYqEvu4",
    authDomain: "react-curso-85866.firebaseapp.com",
    projectId: "react-curso-85866",
    storageBucket: "react-curso-85866.appspot.com",
    messagingSenderId: "991814448644",
    appId: "1:991814448644:web:b73b72ac60015c5ac16751"
};

export const Firebaseapp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(Firebaseapp);
export const FirebaseDB = getFirestore(Firebaseapp);