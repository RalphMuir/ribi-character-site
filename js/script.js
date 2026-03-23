document.addEventListener('DOMContentLoaded', () => {
    // 1. 初始化上方 Visual 輪播
    const visualSwiper = new Swiper('.visual-swiper', {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        navigation: { nextEl: '.next-btn', prevEl: '.prev-btn' }
    });

    // 2. 初始化 Profile 內容輪播 (跑馬燈模式)
    const profileSwiper = new Swiper('.profile-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        grabCursor: true,
        navigation: {
            nextEl: '.p-next',
            prevEl: '.p-prev',
        },
    });

    // 3. Tab 切換邏輯
    const tabs = document.querySelectorAll('.s-tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-target');
            
            // 切換 Active 狀態
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            contents.forEach(c => c.classList.remove('active'));
            const activeContent = document.getElementById(target);
            activeContent.classList.add('active');

            // 關鍵：如果切換到 Profile，需要手動更新 Swiper 以計算正確寬度
            if(target === 'profile-content') {
                setTimeout(() => {
                    profileSwiper.update();
                }, 50);
            }
        });
    });

    // 背景載入設定
    const hero = document.getElementById('hero-section');
    const bgName = hero.getAttribute('data-fixed-bg');
    if (bgName) hero.style.backgroundImage = `url('img/${bgName}')`;
});
