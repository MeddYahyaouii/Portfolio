// Simple navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "#0d2a5a";
  } else {
    navbar.style.background = "#123679";
  }
});
