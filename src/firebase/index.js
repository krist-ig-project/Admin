//firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBz-TdQBXQF2WBERJh4puW3SLcWsTlm6_w",
  authDomain: "main-d9496.firebaseapp.com",
  projectId: "main-d9496",
  storageBucket: "main-d9496.appspot.com",
  messagingSenderId: "823037781272",
  appId: "1:823037781272:web:6ea99b8f64a0cd3bd32a6d",
  measurementId: "G-38K72QKB72"
};





 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
