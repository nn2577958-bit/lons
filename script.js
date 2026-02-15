import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { 
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider, onAuthStateChanged,
  signOut, deleteUser 
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Firebase 초기화
const firebaseConfig = {
  apiKey: "AIzaSyCyiAepd539cBTPwtcVnAR-HJbb8roLJmE",
  authDomain: "lons-dc24d.firebaseapp.com",
  projectId: "lons-dc24d",
  storageBucket: "lons-dc24d.firebasestorage.app",
  messagingSenderId: "755692328918",
  appId: "1:755692328918:web:a4eb4563cb862d3eb5b677",
  measurementId: "G-NCE37YM3LF"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// DOM 요소
const signupForm = document.getElementById("signup-form");
const signupMsg = document.getElementById("signup-msg");
const loginForm = document.getElementById("login-form");
const loginMsg = document.getElementById("login-msg");
const logoutBtn = document.getElementById("logout-btn");
const deleteBtn = document.getElementById("delete-btn");
const statusMsg = document.getElementById("status-msg");
const userInfo = document.getElementById("user-info");

// 회원가입
signupForm.addEventListener("submit", e => {
  e.preventDefault();
  const email = signupForm["signup-email"].value.trim();
  const pw = signupForm["signup-password"].value;

  if(pw.length < 6){
    signupMsg.innerText = "비밀번호는 최소 6자 이상";
    signupMsg.className = "error";
    return;
  }

  createUserWithEmailAndPassword(auth, email, pw)
    .then(() => {
      signupMsg.innerText = "회원가입 완료! 로그인 해주세요.";
      signupMsg.className = "";
      signupForm.reset();
    })
    .catch(err => {
      if(err.code === "auth/email-already-in-use"){
        signupMsg.innerText = "이미 가입된 이메일입니다. 로그인 해주세요.";
      } else {
        signupMsg.innerText = err.message;
      }
      signupMsg.className = "error";
    });
});

// 로그인
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  const email = loginForm["login-email"].value.trim();
  const pw = loginForm["login-password"].value;

  signInWithEmailAndPassword(auth, email, pw)
    .then(() => {
      loginMsg.innerText = "로그인 성공!";
      loginMsg.className = "";
      loginForm.reset();
    })
    .catch(err => {
      loginMsg.innerText = err.message;
      loginMsg.className = "error";
    });
});

// 로그아웃
logoutBtn.addEventListener("click", () => {
  const user = auth.currentUser;
  if(!user){
    alert("현재 로그인 상태가 아닙니다.");
    return;
  }
  signOut(auth).then(() => alert("로그아웃 완료!"));
});

// 계정 삭제
deleteBtn.addEventListener("click", () => {
  const user = auth.currentUser;
  if(!user){
    alert("로그인 상태가 아닙니다.");
    return;
  }
  deleteUser(user)
    .then(() => alert("계정 삭제 완료!"))
    .catch(err => alert("계정 삭제 실패: " + err.message));
});

// 로그인 상태 감지
onAuthStateChanged(auth, user => {
  if(user){
    userInfo.style.display = "block";
    userInfo.innerText = `로그인 중: ${user.displayName || "사용자"} (${user.email})`;
    signupForm.style.display = "none";
    loginForm.style.display = "none";
    statusMsg.innerText = `로그인 상태: ${user.email}`;
  } else {
    userInfo.style.display = "none";
    signupForm.style.display = "block";
    loginForm.style.display = "block";
    statusMsg.innerText = "로그아웃 상태";
  }
});
