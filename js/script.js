document.addEventListener('DOMContentLoaded', () => {
    // 1. 初始化 Visual 區 (原本的 3 張縮圖輪播)
    const visualSwiper = new Swiper('.visual-swiper', {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
        }
    });

    // 2. 初始化 Profile 區 (三視圖與完整展示圖切換)
    const profileSwiper = new Swiper('.profile-swiper', {
        slidesPerView: 1,      // 每次顯示一整頁面板
        spaceBetween: 30,     // 面板間距
        grabCursor: true,     // 滑鼠抓取手勢
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
            
            // 移除所有 active 狀態
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            // 加入當前 active 狀態
            tab.classList.add('active');
            const activeContent = document.getElementById(target);
            activeContent.classList.add('active');

            // 關鍵：如果切換到 Profile，需強制 Swiper 重新計算寬度
            if(target === 'profile-content') {
                setTimeout(() => {
                    profileSwiper.update();
                }, 100);
            }
        });
    });

    // 處理首頁背景 (假設你有 data-fixed-bg)
    const hero = document.getElementById('hero-section');
    if (hero) {
        const bgName = hero.getAttribute('data-fixed-bg');
        if (bgName) hero.style.backgroundImage = `url('img/${bgName}')`;
    }
});
