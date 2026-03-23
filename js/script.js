document.addEventListener('DOMContentLoaded', () => {
    // 1. 初始化 Swiper
    const swiper = new Swiper('.visual-swiper', {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 25,
        loop: true,
        navigation: {
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
        },
        // 關鍵：這裡移除了 slideChange 事件監聽器，所以滑動縮圖不再切換背景
    });

    // 2. 設定固定背景函式
    function setFixedBackground() {
        const hero = document.getElementById('hero-section');
        // 讀取第一屏上的 data-fixed-bg 屬性值
        const bgName = hero.getAttribute('data-fixed-bg');
        
        // 如果有設定背景檔名
        if (bgName) {
            // 確保您的圖片放在 img/ 資料夾下
            hero.style.backgroundImage = `url('img/${bgName}')`;
        }
    }

    // 3. 頁面載入時設定一次固定背景
    setFixedBackground();

    // 4. 第二屏技能 Tab 切換 (簡單示範，可根據需要移除或保留)
    const skillTabs = document.querySelectorAll('.s-tab');
    skillTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            skillTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
