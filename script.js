// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-list a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
  });
});

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Back to top button
const backToTopBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.style.opacity = "1";
    backToTopBtn.style.visibility = "visible";
  } else {
    backToTopBtn.style.opacity = "0";
    backToTopBtn.style.visibility = "hidden";
  }
});

backToTopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Animation on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(
    ".feature-card, .testimonial-card, .pricing-card"
  );

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
}

// Set initial state for animation
document
  .querySelectorAll(".feature-card, .testimonial-card, .pricing-card")
  .forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);
