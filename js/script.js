document.addEventListener('DOMContentLoaded', () => {
    // 1. 初始化 Swiper
    const swiper = new Swiper('.visual-swiper', {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        navigation: { nextEl: '.next-btn', prevEl: '.prev-btn' }
    });

    // 2. 固定背景
    const hero = document.getElementById('hero-section');
    const bgName = hero.getAttribute('data-fixed-bg');
    if (bgName) {
        hero.style.backgroundImage = `url('img/${bgName}')`;
    }

    // 3. Tab 切換邏輯
    const tabs = document.querySelectorAll('.s-tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-target');

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            contents.forEach(c => c.classList.remove('active'));
            document.getElementById(target).classList.add('active');
        });
    });
});
    // 在 DOMContentLoaded 裡面加入
    const profileSwiper = new Swiper('.profile-swiper', {
        slidesPerView: 1,      // 一次顯示一頁面板
        spaceBetween: 30,     // 面板間距
        grabCursor: true,     // 滑鼠抓取手勢
        navigation: {
            nextEl: '.p-next',
            prevEl: '.p-prev',
        },
    });
    
    // 記得在 Tab 切換邏輯中加入這行，防止 Swiper 因為隱藏而計算錯誤
    if (target === 'profile-content') {
        setTimeout(() => profileSwiper.update(), 100);
    }
