// firebase.js – Initialisierung

const firebaseConfig = {
  apiKey: "AIzaSyCC9zB_me4qdyBmHZ0TeUDPB1WoPNa6e1A",
  authDomain: "ground-handling-log.firebaseapp.com",
  projectId: "ground-handling-log",
  appId: "1:771821879817:web:35ad14da4ab4613b832ed8"
};

// Init
firebase.initializeApp(firebaseConfig);

// Globals
const auth = firebase.auth();
const db = firebase.firestore();
