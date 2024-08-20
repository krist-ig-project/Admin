//firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDw17LxaQjejQvqWkLpFfMeUMmQZjmctBM",
  authDomain: "project-1-4a15c.firebaseapp.com",
  projectId: "project-1-4a15c",
  storageBucket: "project-1-4a15c.appspot.com",
  messagingSenderId: "865393578378",
  appId: "1:865393578378:web:e4bf6ef6291effa18c3873",
  measurementId: "G-DT0NVBQE6C"
};




 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
