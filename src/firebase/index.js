//firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPgmW_mg4-WrDxon6HSIYZ2DMgpcvVL_0",
  authDomain: "backup-forums.firebaseapp.com",
  projectId: "backup-forums",
  storageBucket: "backup-forums.appspot.com",
  messagingSenderId: "107728706395",
  appId: "1:107728706395:web:4ee37348d9f01d483b187e",
  measurementId: "G-3MVEVY0VXZ"
};

 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);