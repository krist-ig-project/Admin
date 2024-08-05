//firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaret8RnokYQpBxaYML0U6J0Ewdq9g_AY",
  authDomain: "letphish-1.firebaseapp.com",
  projectId: "letphish-1",
  storageBucket: "letphish-1.appspot.com",
  messagingSenderId: "295369868266",
  appId: "1:295369868266:web:bdfaebc5fdc8935304e893",
  measurementId: "G-X4HBZLYHHE"
};




 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
