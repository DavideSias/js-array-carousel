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
const eleSide = document.querySelector('.side-imgs');
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

	const eleSideImg = document.createElement('img');
	eleSideImg.src = arrImages[i];
	eleSideImg.classList.add('img-side');
	
	if (i === 0) {
		eleSideImg.classList.add('focused');
	}
	
	eleSide.append(eleSideImg);
}

const listEleImg = document.querySelectorAll('.slider-img'); 
const listSideImg = document.querySelectorAll('.img-side'); 

let activeIndex = 0;

eleBtnDown.addEventListener('click', function () {

    listEleImg[activeIndex].classList.remove('active');
    listSideImg[activeIndex].classList.remove('focused');

    if(activeIndex === listEleImg.length - 1){
        activeIndex = -1;
    }
    
    activeIndex++;  
    listEleImg[activeIndex].classList.add('active');
    listSideImg[activeIndex].classList.add('focused');
    
});

eleBtnUp.addEventListener('click', function () {

	listEleImg[activeIndex].classList.remove('active');
    listSideImg[activeIndex].classList.remove('focused');


    if(activeIndex === 0){
        activeIndex = listEleImg.length;
    }

	activeIndex--;
	listEleImg[activeIndex].classList.add('active');
    listSideImg[activeIndex].classList.add('focused');

});

