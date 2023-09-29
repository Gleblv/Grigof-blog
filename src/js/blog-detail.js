const similarSwiper = new Swiper('.article-similar__swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    grid: {
        fill: 'row',
        rows: 4,
    },
    speed: 600,

    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
            grid: {
                fill: 'row',
                rows: 1,
            }
        }
    },

    navigation: {
        nextEl: '.article-similar__swiper-button-next',
        prevEl: '.article-similar__swiper-button-prev',
    },
})