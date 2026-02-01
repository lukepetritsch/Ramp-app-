<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged
  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCC9zB_me4qdyBmHZOTeUDP8IWoPNa6e1A",
    authDomain: "ground-handling-log.firebaseapp.com",
    projectId: "ground-handling-log",
    appId: "1:771821879817:web:35ad14da4ab4613b832ed8"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  document.getElementById("googleLogin").addEventListener("click", async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Login erfolgreich:", result.user.email);
      window.location.href = "dashboard.html";
    } catch (error) {
      alert("Login fehlgeschlagen: " + error.message);
    }
  });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Bereits eingeloggt:", user.email);
    }
  });
</script>
