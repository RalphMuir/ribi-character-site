document.addEventListener('DOMContentLoaded', () => {
    // 1. 初始化 Swiper
    const swiper = new Swiper('.visual-swiper', {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
        },
        on: {
            // 當滑動到不同圖片時觸發
            slideChange: function () {
                const activeSlide = this.slides[this.activeIndex];
                const bgUrl = activeSlide.getAttribute('data-bg');
                updateBackground(bgUrl);
            }
        }
    });

    // 2. 切換背景函式
    function updateBackground(url) {
        const hero = document.getElementById('hero-section');
        // 這裡如果你有實際圖床，請替換 url
        // 範例：hero.style.backgroundImage = `url('img/${url}')`;
        hero.style.backgroundImage = `url('https://via.placeholder.com/1920x1080/222/ff4d6d?text=Background+${url}')`;
    }

    // 3. 初始背景設定
    updateBackground('bg1.jpg');

    // 4. 第二屏技能 Tab 切換 (簡單示範)
    const skillTabs = document.querySelectorAll('.s-tab');
    skillTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            skillTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
});