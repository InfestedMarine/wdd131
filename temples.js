// Dynamically display the current year
const yearSpan = document.getElementById('currentyear');
if (yearSpan) {
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
}

// Display the last modified date
const lastModified = document.getElementById('lastModified');
if (lastModified) {
  lastModified.textContent = `Last modified: ${document.lastModified}`;
}

// Hamburger menu toggle
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("main-nav");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("hide");
  menuButton.textContent = navMenu.classList.contains("hide") ? "\u2630" : "\u2715"; // ☰ or ✕
});
