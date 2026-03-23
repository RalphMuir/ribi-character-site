document.addEventListener('DOMContentLoaded', () => {
    // 1. 初始化 Visual 輪播 (上方)
    const visualSwiper = new Swiper('.visual-swiper', {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        navigation: { nextEl: '.next-btn', prevEl: '.prev-btn' }
    });

    // 2. 初始化 Profile 拖動切換 (下方)
    const profileSwiper = new Swiper('.profile-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        grabCursor: true,
        navigation: {
            nextEl: '.p-next',
            prevEl: '.p-prev',
        },
    });

    // 3. Tab 切換功能
    const tabs = document.querySelectorAll('.s-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-target');
            
            // 隱藏其他，顯示當前
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            tabs.forEach(t => t.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(target).classList.add('active');

            // 重要：切換回 Profile 時，必須強制重新計算 Swiper 寬度，否則會滑不動
            if (target === 'profile-content') {
                setTimeout(() => {
                    profileSwiper.update();
                }, 100);
            }
        });
    });
});
