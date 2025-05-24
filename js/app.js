const mySideNav = document.getElementById("mySideNav");
const openBtn = document.getElementById("openBtn");

let navOuvert = false;

openBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  if (!navOuvert) {
    openNav();
  } else {
    closeNav();
  }
  navOuvert = !navOuvert;
  openBtn.setAttribute("aria-expanded", navOuvert); // Mise à jour ici
});

function openNav() {
  mySideNav.classList.add("active");
}

function closeNav() {
  mySideNav.classList.remove("active");
}

document.addEventListener("click", (event) => {
  if (
    navOuvert &&
    !mySideNav.contains(event.target) &&
    event.target !== openBtn
  ) {
    mySideNav.classList.remove("active");
    navOuvert = false;
    openBtn.setAttribute("aria-expanded", false);
  }
});
