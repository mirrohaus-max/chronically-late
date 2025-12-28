// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Set footer year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

document.addEventListener("DOMContentLoaded", function () {
  var burger = document.getElementById("mh-burger");
  var mobileNav = document.getElementById("mh-mobile-nav");

  if (burger && mobileNav) {
    burger.addEventListener("click", function () {
      mobileNav.classList.toggle("is-open");
    });
  }
});

// Close mobile nav when a link is clicked
document.querySelectorAll("#mh-mobile-nav a").forEach((a) => {
  a.addEventListener("click", () => {
    document.getElementById("mh-mobile-nav")?.classList.remove("is-open");
  });
});
