const inviteButton = document.getElementById("invite-btn");
if (inviteButton) {
  inviteButton.addEventListener("click", (e) => {
    e.preventDefault();
    alert("디스코드에서 LONSBOT을 초대합니다!");
  });
}
