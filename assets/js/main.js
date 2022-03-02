/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/* ===== MENU SHOW  ===== */
// Validate if constant exist
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* ===== MENU CLOSE  ===== */
// Validate if constant exist
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADDING ACTION TO ARROW ICON ===============*/
const arrow = document.querySelector(".feature__heading");
const infos = document.querySelector(".feature__discription");
const arrowUp = document.getElementById("arrow__up");
const arrowDown = document.getElementById("arrow__down");

arrow.addEventListener("click", function () {
  if (arrowDown.classList.contains("hidden")) {
    infos.classList.add("hidden");
    arrowDown.classList.remove("hidden");
    arrowUp.classList.add("hidden");
  } else {
    infos.classList.remove("hidden");
    arrowDown.classList.add("hidden");
    arrowUp.classList.remove("hidden");
  }
});

if (arrowUp.classList.contains("hidden")) {
  console.log("Sadge");
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== ADD ACTIVE CLASS TO SELECTED SECTION ===============*/
let links = document.querySelectorAll(".nav__link");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
