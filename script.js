/* Her lytter man til når hjemmesiden er loadet */
document.addEventListener("DOMContentLoaded", start);

/* når hjemmesiden er loadet, "aktivereres" funktionen "start"*/
/* Herunder sørger man for, at man kan trykke på alle knapper og filtrerer */
function start() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLink = document.querySelectorAll(".nav-link");

  hamburger.addEventListener("click", mobileMenu);
  navLink.forEach((n) => n.addEventListener("click", closeMenu));

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
}