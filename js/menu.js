const burgerBtn = document.querySelector(".menu__burger");
const barsIco = document.querySelector(".fa-bars");
const Xico = document.querySelector(".fa-times");
const dropdownMenu = document.querySelector(".menu");

const showMenu = () => {
	dropdownMenu.classList.toggle("menu--hide");
	barsIco.classList.toggle("menu__burger--hide");
	Xico.classList.toggle("menu__burger--hide");
};

burgerBtn.addEventListener("click", showMenu);
