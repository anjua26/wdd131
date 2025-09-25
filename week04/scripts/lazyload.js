const year = document.querySelector("#year");
const today = new Date();
const currentYear = new Date().getFullYear();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const lastModified = document.querySelector("#lastModified")

lastModified.innerHTML = `Last Modified: <span class="highlight">${document.lastModified}</span>`;