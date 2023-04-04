let login = document.querySelector("#login");
let register = document.querySelector("#register");
let hideRes = document.querySelector(".register");
let hidelog = document.querySelector(".login");
login.addEventListener("click", () => {
  hideRes.style.display = "none";
  hidelog.style.display = "block";
});
register.addEventListener("click", () => {
  hidelog.style.display = "none";
  hideRes.style.display = "block";
});

// reponsive trên mobil
let chacha1 = document.querySelector(".chacha1");
let concon1 = document.querySelector(".concon1");
function toggleConcon1() {
  if (isConcon1Visible) {
    concon1.style.transform = "translateX(-100%)";
    isConcon1Visible = false;
  } else {
    concon1.style.transform = "translateX(0)";
    isConcon1Visible = true;
  }
}

chacha1.addEventListener("click", toggleConcon1);
chacha1.addEventListener("touchend", toggleConcon1);
