//firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzfkwM8Un7EuJB6MUzpGKRdR1KictzPDQ",
  authDomain: "backup-bakcup.firebaseapp.com",
  projectId: "backup-bakcup",
  storageBucket: "backup-bakcup.appspot.com",
  messagingSenderId: "159336108659",
  appId: "1:159336108659:web:5b55de1d02d33912a65006"
};




 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
