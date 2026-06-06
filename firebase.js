// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2DnBwhRcHlrHNYbZ-9kGNHQzyfySoVdw",
  authDomain: "prj1504-4c5c4.firebaseapp.com",
  projectId: "prj1504-4c5c4",
  storageBucket: "prj1504-4c5c4.firebasestorage.app",
  messagingSenderId: "669143642343",
  appId: "1:669143642343:web:62a33ffc6e65d63eebb242",
  measurementId: "G-3EWECWJY9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
