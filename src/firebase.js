// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvKVtG_CCCMscKycWJ8wrcsKLKyLx9UlA",
  authDomain: "chamber-495e0.firebaseapp.com",
  projectId: "chamber-495e0",
  storageBucket: "chamber-495e0.appspot.com",
  messagingSenderId: "262400671680",
  appId: "1:262400671680:web:e8f3c187305b36c70b1225",
  measurementId: "G-XEGPQSHXX0",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export const auth = getAuth(app);
export { app, db, storage };
