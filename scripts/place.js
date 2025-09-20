const year = document.querySelector("#year");
const today = new Date();
const currentYear = new Date().getFullYear();
const windChill = document.querySelector("#windChill")
const temperature = 90
const wind = 2

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const lastModified = document.querySelector("#lastModified")

lastModified.innerHTML = `Last Modified: <span class="highlight">${document.lastModified}</span>`;

function calculateWindChill(t, w) {
    return 35.74 + (0.6215 * t) - (35.75 * Math.pow(w, 0.16)) + 0.4275 * t * Math.pow(w, 0.16);
}

chill = Math.round(calculateWindChill(temperature, wind))

if (temperature <= 50, wind > 3) {
    windChill.innerHTML = `<span id="windChill">${chill} °F</span>`;
}
else {
    windChill.innerHTML = `<span id="windChill">N/A</span>`;
}

