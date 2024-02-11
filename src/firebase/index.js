//firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByhfHM-J-TZxsAPDI0gzEbAKq9d3WkRRw",
  authDomain: "second-service.firebaseapp.com",
  projectId: "second-service",
  storageBucket: "second-service.appspot.com",
  messagingSenderId: "634807794569",
  appId: "1:634807794569:web:e59d1092178bae3605ff58",
  measurementId: "G-15G3XN0R3L"
};





 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
