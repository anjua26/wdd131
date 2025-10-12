const year = document.querySelector("#year");
const today = new Date();
const currentYear = new Date().getFullYear();
const lastModified = document.querySelector("#lastModified");
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector(".navigation");
const homeHeading = document.querySelector(".home-heading");
const img1 = document.querySelector(".llama1");
const img2 = document.querySelector(".llama2")
const left = document.querySelector('#left-arrow');
const right = document.querySelector('#right-arrow')
const llamas = [
    "images/alpaca1.webp",
    "images/alpaca2.webp",
    "images/alpaca3.webp",
    "images/alpaca4.webp",
    "images/alpaca5.webp",
    "images/alpaca6.webp",
    "images/llama1.webp",
    "images/llama2.webp",
    "images/llama3.webp",
    "images/llama4.webp"
]

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
lastModified.innerHTML = `Last Modified: <span class="highlight">${document.lastModified}</span>`;

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

left.addEventListener('click', () => {
    img1.classList.toggle('left');
    img2.classList.toggle('right');
});

right.addEventListener('click', () => {
    img1.classList.toggle('left');
    img2.classList.toggle('right');
});

createLlamaCard(llamas);

function createLlamaCard(filterllamas) {
    document.querySelector(".container").innerHTML = ""
    filterllamas.forEach(llama => {
        let card = document.createElement("section");
        card.className = "box";
        let img = document.createElement("img");

        img.src = llama;
        img.setAttribute("alt", `llamas and alpacas`)
        img.setAttribute("loading", "lazy")
        img.setAttribute("width", 400)
        img.setAttribute("height", 250)

        card.appendChild(img)

        document.querySelector(".container").appendChild(card)
    })
}

document.querySelector(".wf1").addEventListener('submit', () => {
    const formData = {
        name: document.querySelector("#name").value,
        phone: document.querySelector("#phone").value,
        email: document.querySelector("#email").value,
        comment: document.querySelector("#comments").value
    }
    const formDataJSON = JSON.stringify(formData);
    localStorage.setItem('myFormData', formDataJSON);
})

