let showComment = document.querySelectorAll('.show-comment-list');
// let showMiniPhoto = document.querySelectorAll('.slider-mini-image');
let currentIndex = 0;
// let previousIndex = 0;
// console.log(showMiniPhoto)

// console.log(showComment)


function showImages() {
    showComment[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % showComment.length; // якщо ми досягли кінця списку блоків, ми повертаємося до першого блоку за допомогою оператора %.
    showComment[currentIndex].style.display = 'block';


    // showComment[currentIndex].classList.add('.test')
    // showComment[currentIndex].style.transition = 'visibility 0s, opacity 0.5s linear';

}

// function showMiniImages() {
//     showMiniPhoto[currentIndex].classList.remove('slider-mini-image');
//     previousIndex = currentIndex;
//     currentIndex = (currentIndex + 1) % showMiniPhoto.length;
//     showMiniPhoto[currentIndex].classList.add('slider-mini-image');
//     showMiniPhoto[previousIndex].style.marginTop = '40px';
// }
// setInterval(showMiniImages, 2000)

setInterval(showImages, 1000)


var blocks = document.querySelectorAll('.slider-mini-image');
var activeIndex = 0;
var previousIndex = 0;

setInterval(function() {
    // blocks[0].style.transform = 'translateY(-20px)';
    previousIndex = activeIndex;
    activeIndex = (activeIndex + 1) % blocks.length;
    blocks[previousIndex].style.transform = 'translateY(0)';
    blocks[previousIndex].style.transition = '0.7s';
    // blocks[activeIndex].classList.add('.test')

    blocks[activeIndex].style.transform = 'translateY(-20px)';
    blocks[activeIndex].style.transition = '0.7s';

}, 1000);