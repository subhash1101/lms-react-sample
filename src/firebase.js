// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1QL1t4Lgr2cM8rH92y7EbUYHBpB9dHxw",
  authDomain: "lms-easy.firebaseapp.com",
  projectId: "lms-easy",
  storageBucket: "lms-easy.firebasestorage.app",
  messagingSenderId: "570496931592",
  appId: "1:570496931592:web:f095f01662204e5d7ebebd",
  measurementId: "G-GE74DTC0YG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Auth
export const auth = getAuth(app);
