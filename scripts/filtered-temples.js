const year = document.querySelector("#year");
const today = new Date();
const currentYear = new Date().getFullYear();
const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Tucson Arizona",
		location: "Tucson, Arizona, United States",
		dedicated: "2012, October, 6",
		area: 38216,
		imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tucson-arizona-temple/tucson-arizona-temple-8384-thumb.jpg"
	},
	{
		templeName: "Mesa Arizona",
		location: "Mesa, Arizona, United States",
		dedicated: "1927, October, 23",
		area: 75000,
		imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple/mesa-arizona-temple-64606-thumb.jpg"
	},
	{
		templeName: "The Gila Valley Arizona",
		location: "Central, Arizona, United States",
		dedicated: "2010, May, 23",
		area: 18561,
		imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/the-gila-valley-arizona-temple/the-gila-valley-arizona-temple-12777-thumb.jpg"
	}
];
const homeTemples = document.querySelector("#home");
const oldTemples = document.querySelector("#old");
const newTemples = document.querySelector("#new");
const largeTemples = document.querySelector("#large");
const smallTemples = document.querySelector("#small");
const lastModified = document.querySelector("#lastModified")
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector(".navigation");
const homeHeading = document.querySelector(".home-heading")

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
lastModified.innerHTML = `Last Modified: <span class="highlight">${document.lastModified}</span>`;

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

createTempleCard(temples);
homeHeading.textContent = "Home";

homeTemples.addEventListener("click", () => {
	homeHeading.textContent = "Home";
	createTempleCard(temples)
});

oldTemples.addEventListener("click", () => {
	homeHeading.textContent = "Old";
	createTempleCard(temples.filter(temple => temple.dedicated.startsWith("18")))
})

newTemples.addEventListener("click", () => {
	homeHeading.textContent = "New";
	createTempleCard(temples.filter(temple => temple.dedicated.charAt(0)==="2"))
})

largeTemples.addEventListener("click", () => {
	homeHeading.textContent = "Large";
	createTempleCard(temples.filter(temple => temple.area > 90000))
})

smallTemples.addEventListener("click", () => {
	homeHeading.textContent = "Small";
	createTempleCard(temples.filter(temple => temple.area < 10000))
})

function createTempleCard(filteredtemples) {
	document.querySelector(".container").innerHTML = ""
	filteredtemples.forEach(temple => {
		let card = document.createElement("section");
		card.className = "box";
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = temple.templeName;
		location.innerHTML = `<span class=label>Location:</span> ${temple.location}`;
		dedication.innerHTML = `<span class=label>Dedicated:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class=label>Size:</span> ${temple.area} sq ft`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`)
		img.setAttribute("loading", "lazy")
		img.setAttribute("width", 400)
		img.setAttribute("height", 250)
		

		card.appendChild(name)
		card.appendChild(location)
		card.appendChild(dedication)
		card.appendChild(area)
		card.appendChild(img)

		document.querySelector(".container").appendChild(card)
	})
}