// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkILRJpv9YBeAJ93r9WQaSEJ4p1lwomTc",
  authDomain: "patrick-mern.firebaseapp.com",
  projectId: "patrick-mern",
  storageBucket: "patrick-mern.firebasestorage.app",
  messagingSenderId: "193681074330",
  appId: "1:193681074330:web:0b40da6c94e1a532d79723",
  measurementId: "G-BF9GG9WGLJ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);