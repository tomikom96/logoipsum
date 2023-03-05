const sliderBox = document.querySelector(".slider__box");
const leftBtn = document.querySelector(".slider__btn--left");
const rightBtn = document.querySelector(".slider__btn--right");
const carouselImages = document.querySelectorAll(".slider__img");
const carouselWidth = 100;
const carouselSpeed = 3000;

let index = 0;

const handleCarousel = () => {
	index++;
	changeImage();
};

let startCarousel = setInterval(handleCarousel, carouselSpeed);

const changeImage = () => {
	if (index > carouselImages.length - 1) {
		index = 0;
	} else if (index < 0) {
		index = carouselImages.length - 1;
	}

	sliderBox.style.transform = `translateX(${-index * carouselWidth}%)`;
};

const handleRightArrow = () => {
	index++;
	resetInterval();
};

const handleLeftArrow = () => {
	index--;
	resetInterval();
};

const resetInterval = () => {
	changeImage();
	clearInterval(startCarousel);
	startCarousel = setInterval(handleCarousel, carouselSpeed);
};

rightBtn.addEventListener("click", handleRightArrow);
leftBtn.addEventListener("click", handleLeftArrow);
