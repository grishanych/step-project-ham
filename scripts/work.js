let btn = document.querySelector('.work-btn');
let loadImages = document.querySelector('.work-images-hidden');
let imagesDefault = document.querySelector('.work-images');
let imgCategory = document.querySelectorAll('.work-tabs-title');
let showImg = document.querySelectorAll('.img-after-filter-clicked');

let showAllImages = document.getElementById('show-all');
let showAllImagesArrayList = Array.from(showAllImages.children);
console.log(showAllImagesArrayList)

function hideAllImages() {
    showAllImagesArrayList.forEach((e) => {
        console.log(e)
        e.style.display = 'none'
    })
}
hideAllImages();

function showAllImagesOnTabAll() {
    showAllImagesArrayList.forEach((e) => {
        console.log(e)
        e.style.display = 'flex'
    })
}

btn.addEventListener('click', () => {
    loadImages.classList.remove('hidden');
    loadImages.classList.add('work-images-after-btn-click');
    hideBtn()
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
    if (index < 0 || index >= imgCategory.length) {
        return;
    }
    imgCategory.forEach(tab => tab.classList.remove('work-actived'));
    showImg.forEach(content => content.style.display = 'none');

    imgCategory[index].classList.add('work-actived');

    if (showImg[index]) {
        showImg[index].style.display = 'flex';
    }


}

imgCategory.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        showAllImagesOnTabAll()
        imagesDefault.classList.add('work-images-hidden');
        hideLoadedImages()
        hideBtn()
        showImagesCategories(index);
    });

});

showImagesCategories(0);