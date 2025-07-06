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