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

// === TEMPLE LOGIC ===
const container = document.querySelector("#temples");
const nav = document.querySelector("nav");
let allTemples = [];

function displayTemples(temples) {
  container.innerHTML = "";
  temples.forEach(temple => {
    container.innerHTML += `
      <section class="temple-card">
        <h2>${temple.name}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
      </section>
    `;
  });
}

// Load and display all temples initially
fetch("temples-list.json")
  .then(response => {
    if (!response.ok) throw new Error("Fetch failed: " + response.status);
    return response.json();
  })
  .then(data => {
    allTemples = data;
    displayTemples(allTemples);
  })
  .catch(err => {
    console.error("Error loading temple data:", err);
  });

// Filter STUFF
nav.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;

  const filter = e.target.dataset.filter;
  let filtered = [];

  switch (filter) {
    case "old":
      filtered = allTemples.filter(t => {
        const year = parseInt(t.dedicated.match(/\d{4}/)?.[0]);
        return year && year < 1900;
      });
      break;
    case "new":
      filtered = allTemples.filter(t => {
        const year = parseInt(t.dedicated.match(/\d{4}/)?.[0]);
        return year && year > 2000;
      });
      break;
    case "large":
      filtered = allTemples.filter(t => Number(t.area) > 90000);
      break;
    case "small":
      filtered = allTemples.filter(t => Number(t.area) < 10000);
      break;
    case "home":
      filtered = allTemples;
      break;
    default:
      filtered = allTemples;
  }

  displayTemples(filtered);
});