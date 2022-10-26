/*
Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello 
*/

const arrImages = [
	'img/01.jpg',
	'img/02.jpg',
	'img/03.jpg',
	'img/04.jpg',
	'img/05.jpg',
];

const eleSlider = document.querySelector('.slider');
const eleBtnUp = document.querySelector('.btn-up');
const eleBtnDown = document.querySelector('.btn-down');


for (let i = 0; i < arrImages.length; i++) {
	const eleImg = document.createElement('img');
	eleImg.src = arrImages[i];
	eleImg.classList.add('slider-img');

	if (i === 0) {
		eleImg.classList.add('active');
	}

	eleSlider.append(eleImg);
}


const listEleImg = document.querySelectorAll('.slider-img'); 

let activeIndex = 0;

eleBtnDown.addEventListener('click', function () {

    listEleImg[activeIndex].classList.remove('active');

    if(activeIndex === 4){
        activeIndex = -1;
    }
    
    activeIndex++;  
    listEleImg[activeIndex].classList.add('active');
    
});

eleBtnUp.addEventListener('click', function () {

	listEleImg[activeIndex].classList.remove('active');

    if(activeIndex === 0){
        activeIndex = 5;
    }

	activeIndex--;
	listEleImg[activeIndex].classList.add('active');
});