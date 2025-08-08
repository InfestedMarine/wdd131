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

//I used A.I on this part to condense the array list I was given on the instruction. So it looks neat
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("productName");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
});


