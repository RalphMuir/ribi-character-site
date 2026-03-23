document.addEventListener('DOMContentLoaded', () => {
    // 1. 初始化上方視覺輪播
    const visualSwiper = new Swiper('.visual-swiper', {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        navigation: { nextEl: '.next-btn', prevEl: '.prev-btn' }
    });

    // 2. 初始化 Profile 展示切換 (手動翻頁模式)
    const profileSwiper = new Swiper('.profile-swiper', {
        slidesPerView: 1,      // 一次換一頁
        spaceBetween: 30,
        grabCursor: true,      // 手勢拖動
        navigation: {
            nextEl: '.p-next',
            prevEl: '.p-prev',
        },
    });

    // 3. Tab 切換功能，並確保 Swiper 在顯示後更新
    const tabs = document.querySelectorAll('.s-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-target');
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            document.querySelectorAll('.s-tab').forEach(t => t.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(target).classList.add('active');

            if(target === 'profile-content') {
                setTimeout(() => profileSwiper.update(), 50); // 解決隱藏切換後滑不動的問題
            }
        });
    });
});
