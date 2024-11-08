import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvu40cSJEXDGmFc4v9IuMTIQWg2Tsp2GE",
  authDomain: "calzados-piel-morena.firebaseapp.com",
  projectId: "calzados-piel-morena",
  storageBucket: "calzados-piel-morena.firebasestorage.app",
  messagingSenderId: "795574973229",
  appId: "1:795574973229:web:b8877e78e8b1c6e13699a4",
  measurementId: "G-SP2LVM49KZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
