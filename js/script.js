document.addEventListener('DOMContentLoaded', () => {
    // 1. 初始化頂部輪播
    const visualSwiper = new Swiper('.visual-swiper', {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        navigation: { nextEl: '.next-btn', prevEl: '.prev-btn' }
    });

    // 2. 初始化 Profile 左右滑動 (外框架滑動效果)
    const profileSwiper = new Swiper('.profile-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        grabCursor: true,
        pagination: {
            el: '.profile-pagination',
            clickable: true,
        },
    });

    // 3. 背景處理
    const hero = document.getElementById('hero-section');
    const bgName = hero.getAttribute('data-fixed-bg');
    if (bgName) hero.style.backgroundImage = `url('img/${bgName}')`;

    // 4. Tab 切換邏輯
    const tabs = document.querySelectorAll('.s-tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-target');
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            contents.forEach(c => c.classList.remove('active'));
            
            const activeContent = document.getElementById(target);
            activeContent.classList.add('active');

            // 如果切換到 Profile，需強制更新 Swiper
            if(target === 'profile-content') {
                setTimeout(() => profileSwiper.update(), 100);
            }
        });
    });
});
