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
