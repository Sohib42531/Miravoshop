// MIRAVO Website Script

console.log("MIRAVO Website Loaded Successfully");

// Smooth Scroll
document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
  });
});

// Simple Fade Animation
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});
