const tabs = document.querySelectorAll('.tabs-title');
// console.log(tabs)
const tabContents = document.querySelectorAll('.tabs-list');
// console.log(tabContents)

function showTab(index) {
    if (index < 0 || index >= tabs.length) {
        return;
    }
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.style.display = 'none');
    tabs[index].classList.add('active');

    if (tabContents[index]) {
        tabContents[index].style.display = 'block';
    }

}

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        showTab(index);
    });
});

showTab(0);
