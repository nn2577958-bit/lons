import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "lons-dc24d.firebaseapp.com",
  projectId: "lons-dc24d",
  storageBucket: "lons-dc24d.appspot.com",
  messagingSenderId: "755692328918",
  appId: "1:755692328918:web:a4eb4563cb862d3eb5b677"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const loginForm = document.getElementById("login-form");
const loginMsg = document.getElementById("login-msg");
const googleBtn = document.getElementById("google-login-btn");

// 이메일 로그인
loginForm?.addEventListener("submit", e => {
  e.preventDefault();

  const email = document.getElementById("login-email").value.trim();
  const pw = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, pw)
    .then(() => {
      window.location.href = "home.html";
    })
    .catch(err => {
      loginMsg.innerText = err.message;
    });
});

// 구글 로그인
googleBtn?.addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then(() => {
      window.location.href = "home.html";
    })
    .catch(error => {
      loginMsg.innerText = error.message;
    });
});

// 로그인 상태 체크
onAuthStateChanged(auth, user => {
  if (!user && window.location.pathname.includes("home.html")) {
    window.location.href = "index.html";
  }
});
