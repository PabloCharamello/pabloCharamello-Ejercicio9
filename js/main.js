const navbar = document.querySelector(".sticky-top");
window.onscroll = () => {
  if (window.scrollY > 1) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};
