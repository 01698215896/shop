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
// reponsive trên mobil
let chacha1 = document.querySelector(".chacha1");
let concon1 = document.querySelector(".concon1");
let chacha = document.querySelector(".chacha");
let concon = document.querySelector(".concon");
let menuMb = document.querySelector(".menu-mb");
let menu = document.querySelector(".menu");
let seach = document.querySelector(".seach");
let timkiem = document.querySelector(".timkiem");

let isConcon1Visible = false;

function toggleConcon1(name) {
  if (isConcon1Visible) {
    name.style.transform = "translateX(200%)";
    isConcon1Visible = false;
  } else {
    name.style.transform = "translateX(0)";
    isConcon1Visible = true;
  }
}

chacha1.addEventListener("touchend", () => toggleConcon1(concon1));

chacha.addEventListener("touchend", () => toggleConcon1(concon));
menuMb.addEventListener("touchend", () => toggleConcon1(menu));
seach.addEventListener("touchend", () => toggleConcon1(timkiem));

// show pay item
let pmp = document.querySelectorAll(".product2");
let showPay = document.querySelector(".concon");

pmp.forEach((product) => {
  let button = product.querySelector("button");

  button.addEventListener("click", () => {
    let name = product.querySelector(".name11").textContent;
    let img = product.querySelector(".hinh img").src;
    let price = product.querySelector(".price").textContent;
    let arr = {
      name: name,
      img: img,
      price: price,
    };
    // localStorage.setItem("product",JSON.stringify(arr));
    let cart = `
    <div class="listpay">
                          <div class="card mb-3">
                            <div class="row g-0">
                              <div
                                class="col-md-4 overflow-hidden"
                                style="max-width: 180px; height: 180px"
                              >
                                <img
                                  src="${img}"
                                  class="img-fluid rounded-start"
                                  alt="..."
                                  style="
                                    width: 100%;
                                    height: 100%;
                                    object-fit: cover;
                                  "
                                />
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                  <h5 class="card-title">${name}</h5>
                                  <p class="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit longer.
                                  </p>
                                  <p class="card-text">
                                    <small class="text-body-secondary"
                                      >${price}</small
                                    >
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
    `;
    showPay.innerHTML += cart;
  });
});
