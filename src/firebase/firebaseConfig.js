
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxQ5FhkThb8vQ3lfZSoX6l677LXQetZ4A",
  authDomain: "lifephone-proyect.firebaseapp.com",
  projectId: "lifephone-proyect",
  storageBucket: "lifephone-proyect.appspot.com",
  messagingSenderId: "288498400573",
  appId: "1:288498400573:web:1d013b31e1220a98d09954",
  measurementId: "G-XXN13YQRQ0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
