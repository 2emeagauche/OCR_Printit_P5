const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let arrowLeft = document.getElementsByClassName('arrow_left')[0];
let arrowRight = document.getElementsByClassName('arrow_right')[0];
let dots = document.getElementsByClassName('dot');
let dotSelected = document.getElementsByClassName('dot_selected')[0];
let bannerText = document.getElementsByClassName('banner-text')[0];

let bannerImage = document.getElementsByClassName('banner-img')[0];
let bannerImagePath = bannerImage.getAttribute('src');
let lastSlash = bannerImagePath.lastIndexOf('/');
let bannerImagePathRoot = bannerImagePath.substring(0, lastSlash+1);

let currentPosition = 0;
let slidesDimension = slides.length;

arrowRight.addEventListener('click', goForward);
arrowLeft.addEventListener('click', goBackward);

function goForward() {
	if(currentPosition < (slidesDimension - 1))	currentPosition++;
	else currentPosition = 0;
	showPosition();
	updateBanner(slides[currentPosition]);
}

function goBackward() {
	if(currentPosition > 0)	currentPosition--;
	else currentPosition = slidesDimension - 1;
	showPosition();
	updateBanner(slides[currentPosition]);
}

function showPosition() {
	dotSelected = document.getElementsByClassName('dot_selected')[0];
	dotSelected.classList.remove('dot_selected');
	dots[currentPosition].classList.add('dot_selected');
}

function updateBanner(slide) {
	bannerText.innerHTML = slide.tagLine;
	bannerImage.setAttribute('src', bannerImagePathRoot + slide.image);
}