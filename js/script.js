document.addEventListener('DOMContentLoaded', () => {
    // 1. Visual 區輪播
    const visualSwiper = new Swiper('.visual-swiper', {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        navigation: { nextEl: '.next-btn', prevEl: '.prev-btn' }
    });

    // 2. Profile 內容區輪播
    const profileSwiper = new Swiper('.profile-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        grabCursor: true,
        navigation: { nextEl: '.p-next', prevEl: '.p-prev' }
    });

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

            // 修正 Swiper 在隱藏標籤中初始化會失效的問題
            if(target === 'profile-content') {
                profileSwiper.update();
            }
        });
    });

    // 背景設定
    const hero = document.getElementById('hero-section');
    const bgName = hero.getAttribute('data-fixed-bg');
    if (bgName) hero.style.backgroundImage = `url('img/${bgName}')`;
});
