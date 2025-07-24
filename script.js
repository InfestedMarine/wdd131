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

const temperature = 45; // degrees Fahrenheit
const windSpeed = 5;    // miles per hour

function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  ).toFixed(1); // rounded to 1 decimal place
}
const windChillDisplay = document.querySelector("#windchill");

// Only calculate wind chill if the conditions are met
if (temperature <= 50 && windSpeed > 3) {
  windChillDisplay.textContent = `${calculateWindChill(temperature, windSpeed)} °F`;
} else {
  windChillDisplay.textContent = "N/A";
}

// Hamburger menu toggle
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("main-nav");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("hide");
  menuButton.textContent = navMenu.classList.contains("hide") ? "\u2630" : "\u2715"; // ☰ or ✕
});
