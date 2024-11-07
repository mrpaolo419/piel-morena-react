import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH,
  projectId: import.meta.env.VITE_PROJECT,
  storageBucket: import.meta.env.VITE_ESTORAJE,
  messagingSenderId: import.meta.env.VITE_MESSAGIN,
  appId: import.meta.env.VITE_APP,
  measurementId: import.meta.env.VITE_MEASU,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
