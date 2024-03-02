//firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7sw-7ohR55jKRtX5XKv976pc2qiactHE",
  authDomain: "main-a00ae.firebaseapp.com",
  projectId: "main-a00ae",
  storageBucket: "main-a00ae.appspot.com",
  messagingSenderId: "392079473595",
  appId: "1:392079473595:web:2a40a16dc7585b8c03e29e",
  measurementId: "G-VMJ0Z9CXFS"
};





 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
