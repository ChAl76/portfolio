const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("stiky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};

document.addEventListener("DOMContentLoaded", () => {
  const sr = ScrollReveal({
    // distance: "45px",
    duration: 2000,
    reset: true,
  });

  sr.reveal(".home-text", { delay: 250, origin: "left" });
  sr.reveal(".home-img", { delay: 250, origin: "right" });

  sr.reveal(".about, .portfolio", { delay: 200, origin: "bottom" });
});
