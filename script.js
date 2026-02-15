// 🔹 Firebase 초기화
var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MSG_ID",
  appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

// 🔹 요소 가져오기
const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");
const signupMsg = document.getElementById("signup-msg");
const loginMsg = document.getElementById("login-msg");
const boardSection = document.getElementById("board-section");
const authSection = document.getElementById("auth-section");
const postForm = document.getElementById("postForm");
const status = document.getElementById("status");
const userEmailDisplay = document.getElementById("user-email");
const logoutBtn = document.getElementById("logout-btn");

// 🔹 회원가입
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => { signupMsg.textContent = "회원가입 성공! 로그인 해주세요."; })
    .catch(err => { signupMsg.textContent = err.message; });
});

// 🔹 로그인
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => { loginMsg.textContent = ""; })
    .catch(err => { loginMsg.textContent = err.message; });
});

// 🔹 로그인 상태 감지
auth.onAuthStateChanged(user => {
  if (user) {
    authSection.style.display = "none";
    boardSection.style.display = "block";
    userEmailDisplay.textContent = `안녕하세요, ${user.email}님`;
  } else {
    authSection.style.display = "block";
    boardSection.style.display = "none";
  }
});

// 🔹 로그아웃
logoutBtn.addEventListener("click", () => { auth.signOut(); });

// 🔹 게시글 작성
postForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("post-title").value.trim();
  const content = document.getElementById("post-content").value.trim();

  if (!title || !content) {
    status.textContent = "제목과 내용을 입력해주세요.";
    return;
  }

  db.collection("posts").add({
    title,
    content,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    likes: 0
  }).then(() => {
    status.textContent = "게시글이 등록되었습니다!";
    postForm.reset();
  }).catch(err => {
    console.error(err);
    status.textContent = "오류 발생. 콘솔을 확인하세요.";
  });
});
