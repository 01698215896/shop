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
let chacha = document.querySelector(".chacha");
let concon = document.querySelector(".concon");
let menuMb = document.querySelector(".menu-mb");
let menu = document.querySelector(".menu");
function toggleConcon1(id) {
    if (isConcon1Visible) {
      id.style.transform = "translateX(200%)";
      isConcon1Visible = false;
    } else {
      id.style.transform = "translateX(0)";
      isConcon1Visible = true;
    }
  }
  

chacha1.addEventListener("click", toggleConcon1(concon1));
chacha1.addEventListener("touchend", toggleConcon1(concon1));

chacha.addEventListener("touchend", toggleConcon1(concon));
menuMb.addEventListener("touchend", toggleConcon1(menu));
