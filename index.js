/* ===== Typing Effect (Hero Section) ===== */
const typingElement = document.getElementById("typing");

const textArray = [
  "Welcome to the Department of <span class='rgb'>COMPUTER SCIENCE</span>",
  "Where <span class='rgb'>TECH</span> meets <span class='rgb'>CREATIVITY</span>."
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 80; // typing speed (ms per char)
let deletingSpeed = 50; // deleting speed (ms per char)
let pauseBetween = 1500; // pause before switching (ms)

function typeEffect() {
  const currentText = textArray[textIndex];
  typingElement.innerHTML = currentText.substring(0, charIndex);

  if (!isDeleting) {
    charIndex++;
    if (charIndex > currentText.length) {
      if (textIndex === textArray.length - 1) {
        // ✅ Stop typing once last sentence finishes
        typingElement.innerHTML = currentText;
        return;
      }
      isDeleting = true;
      setTimeout(typeEffect, pauseBetween);
      return;
    }
  } else {
    charIndex--;
    if (charIndex < 0) {
      isDeleting = false;
      textIndex++;
    }
  }

  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

// Start typing on page load
document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

/* ===== Toggle Menu ===== */
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

/* ===== Scroll Reveal Animations ===== */
const revealElements = document.querySelectorAll('.fade-in, .slide-left, .slide-right');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // animate once only
    }
  });
}, { threshold: 0.2 });

// Apply to each element with animation class
revealElements.forEach(el => observer.observe(el));
