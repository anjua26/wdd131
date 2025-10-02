const year = document.querySelector("#year");
const today = new Date();
const currentYear = new Date().getFullYear();
const lastModified = document.querySelector("#lastModified");
const list = document.querySelector("#product");
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];


year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
lastModified.innerHTML = `Last Modified: <span class="highlight">${document.lastModified}</span>`;

function chooseProduct() {
    products.forEach(product => {
        let id = product.id
        let name = product.name
        let option = document.createElement("option");
        option.value = id
        option.textContent = name
        list.append(option)
    })
}

chooseProduct(products)

