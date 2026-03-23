document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.visual-swiper', {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 25,
        loop: true,
        navigation: {
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
        },
        on: {
            slideChange: function () {
                const activeSlide = this.slides[this.activeIndex];
                const bgName = activeSlide.getAttribute('data-bg');
                // 這裡會去 img 資料夾找圖
                updateBackground(bgName);
            }
        }
    });

    function updateBackground(fileName) {
        const hero = document.getElementById('hero-section');
        // 確保你的圖片放在 img/ 資料夾下
        hero.style.backgroundImage = `url('img/${fileName}')`;
    }
});
