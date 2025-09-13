const year = document.querySelector("#year");
const today = new Date();
const currentYear = new Date().getFullYear();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const lastModified = document.querySelector("#lastModified")

lastModified.innerHTML = `Last Modified: <span class="highlight">${document.lastModified}</span>`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});