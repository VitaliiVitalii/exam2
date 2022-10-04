/* scroll */

const smoothScroll = (function () {
    const anchors = document.querySelectorAll('a[href*="#"]');
    return {
        scrollRun() {
            for (let anchor of anchors) {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault()
                    
                    const blockID = anchor.getAttribute('href').substr(1)
                    
                    document.getElementById(blockID).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    })
                })
            }
        }
    }
})();

smoothScroll.scrollRun();

/* burger */
const burger = (function () {
    const iconMenu = document.querySelector('.menu__icon');
    const menuBody = document.querySelector('.nav');
    return {
        bugerRun() {
            if (iconMenu) {
                iconMenu.addEventListener('click', function (e) {
                document.body.classList.toggle('_lock');
                iconMenu.classList.toggle('_active');
                menuBody.classList.toggle('_active');
            })
            }
        }
    }
})();

burger.bugerRun();

/* slider */

const swiper = new Swiper('.banner-slider', {
    slidesPerView: 1,
    direction: "vertical",
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.banner-slider__bullet',
        type: 'bullets',
        clickable: true,
    },
    
});

const swiperNews = new Swiper(".news__slider", {
    slidesPerView: 3,
    loop: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
},
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});