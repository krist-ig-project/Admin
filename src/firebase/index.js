//firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPgmW_mg4-WrDxon6HSIYZ2DMgpcvVL_0",
  authDomain: "backup-forums.firebaseapp.com",
  projectId: "backup-forums",
  storageBucket: "backup-forums.appspot.com",
  messagingSenderId: "107728706395",
  appId: "1:107728706395:web:035f203c9492e2b23b187e",
  measurementId: "G-P7BE174QQ0"
};

 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
