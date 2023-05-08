let btn = document.querySelector('.work-btn');
let loadImages = document.querySelector('.work-images-hidden');
let imagesDefault = document.querySelector('.work-images');
let imgCategory = document.querySelectorAll('.work-tabs-title');
let showImg = document.querySelectorAll('.img-after-filter-clicked');

btn.addEventListener('click', () => {
    loadImages.classList.remove('work-images-hidden');
    loadImages.classList.add('work-images-after-btn-click');
    btn.classList.remove('work-btn');
    btn.classList.add('work-images-hidden')
});

function hideBtn() {
    btn.classList.remove('work-btn');
    btn.classList.add('work-images-hidden')
}

function hideLoadedImages() {
    loadImages.classList.add('work-images-hidden');
    loadImages.classList.remove('work-images-after-btn-click');
}

function showImagesCategories(index) {
    if (index < 0 || index >= imgCategory.length  ) {
        return;
    }
     imgCategory.forEach(tab => tab.classList.remove('work-actived'));
    showImg.forEach(content => content.style.display = 'none');
    imgCategory[index].classList.add('work-actived');
    // if (showImg[0]) {
    //     loadImages.classList.remove('work-images-hidden');
    // loadImages.classList.add('work-images-after-btn-click');
    // }
    if (showImg[index] || showImg[index] === 0) {
        showImg[index].style.display = 'flex';
    }


}

imgCategory.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        imagesDefault.classList.add('work-images-hidden');
        // loadImages.classList.remove('work-images-hidden');
        hideLoadedImages()
        hideBtn()
        showImagesCategories(index);
        // console.log(event.target)

    });

});

showImagesCategories(0);