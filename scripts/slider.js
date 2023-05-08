let slideImages = document.querySelectorAll('.slides-block');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let dots = document.querySelectorAll('.dot');
let counter = 0;

//code for next button
next.addEventListener('click', slideNext);
function slideNext(){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= slideImages.length-1){
        counter = 0
    }
    else{
        counter++
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators()
}

//code for prev button
prev.addEventListener('click', slidePrev);
function slidePrev(){
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter === 0){
        counter = slideImages.length-1
    }
    else{
        counter--
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    indicators()
}

//auto sliding
function autoSliding(){
    deleteInterval = setInterval(timer, 2000);
    function timer(){
        slideNext();
        indicators();
    }
}
autoSliding()

//stop auto sliding when mouse is over
const container = document.querySelector('.slider-container');
container.addEventListener('mouseover', function(){
    clearInterval(deleteInterval)
})

//resume  sliding when mouse is out
container.addEventListener('mouseout', autoSliding);

//add and remove active class from  mini images (indicators)
function indicators(){
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' active', '')
    }
    dots[counter].className += ' active';

}

//add click event to mini images (indicators)

function switchImage(currentImage){
    currentImage.classList.add('active');
    let imageId = currentImage.getAttribute('attr');
    if(imageId > counter){
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if(imageId === counter){
        return;
    }
    else{
        slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
    indicators()
}