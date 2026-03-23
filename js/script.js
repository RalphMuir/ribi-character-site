document.addEventListener('DOMContentLoaded', () => {
    // 1. 初始化 Swiper 縮圖
    const swiper = new Swiper('.visual-swiper', {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 25,
        loop: true,
        navigation: { nextEl: '.next-btn', prevEl: '.prev-btn' }
    });

    // 2. 設定第一屏固定背景
    const hero = document.getElementById('hero-section');
    const bgName = hero.getAttribute('data-fixed-bg');
    if (bgName) {
        hero.style.backgroundImage = `url('img/${bgName}')`;
    }

    // 3. Tab 切換邏輯 (點擊 Profile 顯示技能)
    const tabs = document.querySelectorAll('.s-tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-target');

            // 切換按鈕狀態
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // 切換內容顯示
            contents.forEach(c => c.classList.remove('active'));
            document.getElementById(target).classList.add('active');
        });
    });
});
