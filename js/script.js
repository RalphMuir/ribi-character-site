document.addEventListener('DOMContentLoaded', () => {
    // 1. 初始化 Visual Swiper (維持原始設定)
    const swiper = new Swiper('.visual-swiper', {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        navigation: { nextEl: '.next-btn', prevEl: '.prev-btn' }
    });

    // 2. 固定背景
    const hero = document.getElementById('hero-section');
    const bgName = hero.getAttribute('data-fixed-bg');
    if (bgName) {
        hero.style.backgroundImage = `url('img/${bgName}')`;
    }

    // 3. 全局 Tab 切換邏輯
    const tabs = document.querySelectorAll('.s-tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-target');
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            contents.forEach(c => c.classList.remove('active'));
            document.getElementById(target).classList.add('active');
        });
    });

    // 4. Profile 內部面板手動切換 (非 Swiper)
    const pPanels = document.querySelectorAll('.profile-panel');
    const pNext = document.querySelector('.p-next');
    const pPrev = document.querySelector('.p-prev');
    const pNum = document.querySelector('.page-num');
    let pIndex = 0;

    function updatePPanel(index) {
        pPanels.forEach(p => p.classList.remove('active'));
        pPanels[index].classList.add('active');
        pNum.textContent = `${index + 1} / ${pPanels.length}`;
    }

    pNext.addEventListener('click', () => {
        pIndex = (pIndex + 1) % pPanels.length;
        updatePPanel(pIndex);
    });

    pPrev.addEventListener('click', () => {
        pIndex = (pIndex - 1 + pPanels.length) % pPanels.length;
        updatePPanel(pIndex);
    });
});
