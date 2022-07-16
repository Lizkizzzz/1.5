function ready() {
    const button = document.querySelector('.brand-repair_btn');
    const hiddenList = document.querySelector('.brand-repair_list');
    const btnText = button.querySelector('.btn_text');
    const btnSVG = button.querySelector('svg');

    let openAllBrands = function () {
        if (btnText.textContent === 'Показать все') {
            hiddenList.classList.remove(`brand-repair_list--hidden`);
            btnSVG.classList.add('brand-repair_btn_svg');
            btnText.textContent = 'Скрыть';
        } else {
            hiddenList.classList.add(`brand-repair_list--hidden`);
            btnSVG.classList.remove('brand-repair_btn_svg');
            btnText.textContent = 'Показать все';
        }
    }

    button.addEventListener('click', openAllBrands);

    if (window.matchMedia('(max-width: 767px)').matches) {
        new Swiper('.brand-repair_swiper',
            {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                spaceBetween: 16,
                slidesPerView: 'auto',
            });
    }


}

document.addEventListener("DOMContentLoaded", ready);







