document.addEventListener('DOMContentLoaded', () => {
    // 1. 初始化 Visual 輪播 (上方)
    const visualSwiper = new Swiper('.visual-swiper', {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        navigation: { nextEl: '.next-btn', prevEl: '.prev-btn' }
    });

    // 2. 初始化 Profile 拖動展示 (下方)
    const profileSwiper = new Swiper('.profile-swiper', {
        slidesPerView: 1,      // 每次展示一個面板
        spaceBetween: 30,
        grabCursor: true,      // 讓滑鼠變成小手抓取
        navigation: {
            nextEl: '.p-next',
            prevEl: '.p-prev',
        },
    });

    // 3. Tab 切換功能
    const tabs = document.querySelectorAll('.s-tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-target');
            
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            const activeContent = document.getElementById(target);
            activeContent.classList.add('active');

            // 修正：當切換到 Profile 時，強制 Swiper 刷新計算
            if(target === 'profile-content') {
                setTimeout(() => {
                    profileSwiper.update();
                }, 100);
            }
        });
    });

    // 背景處理
    const hero = document.getElementById('hero-section');
    if(hero) {
        const bg = hero.getAttribute('data-fixed-bg');
        if(bg) hero.style.backgroundImage = `url('img/${bg}')`;
    }
});
