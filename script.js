// 디스코드 초대 버튼 클릭 시 안내 메시지 후 이동
const inviteButton = document.getElementById("invite-btn");

if (inviteButton) {
  inviteButton.addEventListener("click", (e) => {
    e.preventDefault(); // 기본 링크 이동 잠시 막기
    alert("오늘도 찾아 와주셔서 감사합니다"); // 안내 메시지
    window.location.href = "https://discord.gg/tnMXbQ65Hk"; // 메시지 확인 후 이동
  });
}

// 우클릭 + 텍스트 선택 차단
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("selectstart", e => e.preventDefault());

// 키보드 단축키 제한 (Ctrl+S, Ctrl+U, F12)
document.addEventListener("keydown", e => {
  if ((e.ctrlKey && ["s","S","u","U"].includes(e.key)) || e.key === "F12") {
    e.preventDefault();
    alert("이 기능은 제한되어 있습니다.");
  }
});
