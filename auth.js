// auth.js – komplette Auth Logik

const statusEl = document.getElementById("status");
const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

// ---------- Helfer ----------
async function ensureUser(user) {
  const ref = db.collection("users").doc(user.uid);
  const snap = await ref.get();

  if (!snap.exists) {
    await ref.set({
      uid: user.uid,
      name: user.displayName || "Handler",
      email: user.email || "",
      createdAt: Date.now(),
      stats: {
        totalFlights: 0,
        totalDelay: 0,
        avgDelay: 0,
        totalPax: 0,
        totalCargo: 0,
        avgScore: 0
      }
    });
  }
}

function goDashboard() {
  window.location.href = "dashboard.html";
}

// ---------- GOOGLE ----------
const googleProvider = new firebase.auth.GoogleAuthProvider();

window.loginGoogle = async function () {
  try {
    statusEl.textContent = "Google Login…";

    if (isIOS) {
      await auth.signInWithRedirect(googleProvider);
    } else {
      await auth.signInWithPopup(googleProvider);
    }
  } catch (e) {
    statusEl.textContent = "Google Fehler: " + e.message;
  }
};

// ---------- APPLE ----------
const appleProvider = new firebase.auth.OAuthProvider("apple.com");

window.loginApple = async function () {
  try {
    statusEl.textContent = "Apple Login…";

    if (isIOS) {
      await auth.signInWithRedirect(appleProvider);
    } else {
      await auth.signInWithPopup(appleProvider);
    }
  } catch (e) {
    statusEl.textContent = "Apple Fehler: " + e.message;
  }
};

// ---------- EMAIL LOGIN ----------
window.loginEmail = async function () {
  try {
    statusEl.textContent = "Login…";
    await auth.signInWithEmailAndPassword(
      email.value.trim(),
      password.value
    );
  } catch (e) {
    statusEl.textContent = "Login Fehler: " + e.message;
  }
};

// ---------- EMAIL REGISTER ----------
window.registerEmail = async function () {
  try {
    statusEl.textContent = "Registrierung…";
    await auth.createUserWithEmailAndPassword(
      email.value.trim(),
      password.value
    );
  } catch (e) {
    statusEl.textContent = "Registrierung Fehler: " + e.message;
  }
};

// ---------- REDIRECT RESULT (iOS) ----------
auth.getRedirectResult().then(async (result) => {
  if (result && result.user) {
    await ensureUser(result.user);
    goDashboard();
  }
});

// ---------- SESSION ----------
auth.onAuthStateChanged(async (user) => {
  if (user) {
    await ensureUser(user);
    goDashboard();
  }
});
