// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD0B5xliOKK-wSVB00zb8T_sqvMJw7J0s",
  authDomain: "ecomm-d0b85.firebaseapp.com",
  projectId: "ecomm-d0b85",
  storageBucket: "ecomm-d0b85.firebasestorage.app",
  messagingSenderId: "883985865041",
  appId: "1:883985865041:web:c34433b2633e7963ed1b70",
  measurementId: "G-BFCE74S4M5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);



export default auth