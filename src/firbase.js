// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need

import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2Ymq5-RNWBgpgDuR-IPnE2rNm_HPu7-o",
  authDomain: "newportfolio-b3f2d.firebaseapp.com",
  projectId: "newportfolio-b3f2d",
  storageBucket: "newportfolio-b3f2d.appspot.com",
  messagingSenderId: "593391298470",
  appId: "1:593391298470:web:7b0dc9a5ff4f0aa2da5167"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app);
export const storage = getStorage();