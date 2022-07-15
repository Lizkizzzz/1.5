let openButton = document.querySelector('.brand-repair_btn--all-brands');
let closeButton = document.querySelector('.brand-repair_btn--some-brands');
let hiddenList = document.querySelector('.brand-repair_list');

openButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    hiddenList.classList.remove(`brand-repair_list--hidden`);
    openButton.classList.remove('brand-repair_btn--visible');
    closeButton.classList.add('brand-repair_btn--visible');
})

closeButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    hiddenList.classList.add('brand-repair_list--hidden');
    openButton.classList.add('brand-repair_btn--visible');
    closeButton.classList.remove('brand-repair_btn--visible');
})

new Swiper('.brand-repair_swiper',
    {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        spaceBetween: 16,
        slidesPerView: 'auto',
    });





