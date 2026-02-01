// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC9zB_me4qdyBmHZOTeUDP8IWoPNa6e1A",
  authDomain: "ground-handling-log.firebaseapp.com",
  projectId: "ground-handling-log",
  storageBucket: "ground-handling-log.firebasestorage.app",
  messagingSenderId: "771821879817",
  appId: "1:771821879817:web:35ad14da4ab4613b832ed8",
  measurementId: "G-SS17MF912N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
