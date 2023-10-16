// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHvfqSYtR802m2Oz8Un_4YO5vnanxEzJQ",
  authDomain: "reunify-skillvalley.firebaseapp.com",
  projectId: "reunify-skillvalley",
  storageBucket: "reunify-skillvalley.appspot.com",
  messagingSenderId: "175544288914",
  appId: "1:175544288914:web:9621a6fb7621d95207084b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);