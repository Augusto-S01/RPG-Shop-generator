
const min = 1;
const max = 5;
const backgroundRandomNumber = Math.floor(Math.random() * (max - min + 1) + min);


const header = document.querySelector(".header");
header.classList.add(`headerBackgroundImage${backgroundRandomNumber}`)
console.log("teste");


