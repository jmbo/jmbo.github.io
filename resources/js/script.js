console.log("Script loaded successfully!");

// update the copyright year dynamically
const cpYear = document.querySelector(".copyright-year");
cpYear.textContent = new Date().getFullYear();

// typewriter effect for the "who am I" text
const whoAmI = document.querySelector(".who-am-i");
const items = [
  "a developer",
  //   "a designer",
  "an engineer",
  "a traveler",
  //   "an adventurer",
  "Jose!",
];

whoAmI.textContent = "";
function typeWriterEffect() {
  function backspace() {
    if (whoAmI.textContent) {
      whoAmI.textContent = whoAmI.textContent.slice(0, -1);
      setTimeout(backspace, TYPING_SPEED);
    } else {
      setTimeout(type, TYPING_SPEED * 2);
    }
  }

  function type() {
    if (charIndex < currentItem.length) {
      whoAmI.textContent += currentItem[charIndex];
      charIndex++;
      setTimeout(type, TYPING_SPEED);
    } else if (currentIndex < items.length - 1) {
      currentIndex++;
      currentItem = items[currentIndex];
      charIndex = 0;
      setTimeout(backspace, WAIT);
    } else {
      whoAmI.addEventListener("click", typeWriterEffect);
    }
  }

  const TYPING_SPEED = 80;
  const WAIT = 1000;
  let currentIndex = 0;
  let currentItem = items[currentIndex];
  let charIndex = 0;

  whoAmI.removeEventListener("click", typeWriterEffect);
  backspace();
}

// start the typewriter effect
typeWriterEffect();

// dark theme button
const btn = document.querySelector(".bth-theme");
const footer = document.querySelector(".footer");

const updateButtonPosition = function () {
  if (!btn || !footer) return;
  const footerRect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const btnHeight = btn.offsetHeight;
  const overlap = windowHeight - footerRect.top;

  if (overlap > 0) {
    // btn.style.position = "absolute";
    // btn.style.bottom = overlap + 2 + "rem"; // 20px for spacing above footer
    btn.style.transform = `translateY(-${overlap - 10}px)`;
  } else {
    btn.style.transform = `translateY(0)`;
    // btn.style.position = "fixed";
    // btn.style.bottom = "2rem";
  }
};

window.addEventListener("scroll", updateButtonPosition);
window.addEventListener("resize", updateButtonPosition);
window.addEventListener("load", updateButtonPosition);

btn.addEventListener("click", function () {
  const body = document.querySelector("body");
  const header = document.querySelector(".header");
  const headerNav = document.querySelector(".header__nav");

  if (btn.textContent === "☀️") {
    btn.textContent = "🌙";
    body.classList.remove("dark-theme");
    header.style.backgroundImage =
      "url(../../vendors/img/subtle-prism-light.svg)";
    headerNav.classList.remove("dark-theme");
  } else {
    btn.textContent = "☀️";
    body.classList.add("dark-theme");
    header.style.backgroundImage =
      "url(../../vendors/img/subtle-prism-dark.svg)";
    headerNav.classList.add("dark-theme");
  }
});
