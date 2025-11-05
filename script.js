// Typing animation
const typing = document.querySelector(".typing");
const text = "Power BI & Data Analytics Expert";
let index = 0;

function type() {
  if (index < text.length) {
    typing.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

window.onload = type;

// Smooth section animation
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const pos = sec.getBoundingClientRect().top;
    const windowHeight = window.innerHeight / 1.3;
    if (pos < windowHeight) sec.classList.add("visible");
  });
});
