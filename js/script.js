document.addEventListener('DOMContentLoaded', () => {
    // 1. 原有的 Visual 輪播
    const visualSwiper = new Swiper('.visual-swiper', {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        navigation: { nextEl: '.next-btn', prevEl: '.prev-btn' }
    });

    // 2. 新增的 Profile 內容輪播
    const profileSwiper = new Swiper('.profile-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false, // 只有兩張時不一定要 loop
        grabCursor: true, // 滑鼠懸停顯示抓取手勢
        navigation: {
            nextEl: '.p-next',
            prevEl: '.p-prev',
        },
    });

    // 3. Tab 切換邏輯 (切換回 Profile 時重新計算 Swiper)
    const tabs = document.querySelectorAll('.s-tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-target');
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            contents.forEach(c => c.classList.remove('active'));
            document.getElementById(target).classList.add('active');

            // 關鍵：如果切換回 Profile，需要更新 Swiper 避免佈局出錯
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
