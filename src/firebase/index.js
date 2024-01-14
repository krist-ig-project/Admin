//firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxxx9Ubspay9DsNHKu300yrr7M69AL7WU",
  authDomain: "first-service-24499.firebaseapp.com",
  projectId: "first-service-24499",
  storageBucket: "first-service-24499.appspot.com",
  messagingSenderId: "749988043724",
  appId: "1:749988043724:web:0fd2c24294aaf77e261b69",
  measurementId: "G-F9KN4WZR08"
};



 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
