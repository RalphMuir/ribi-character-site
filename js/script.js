window.addEventListener('load', () => {
    // 初始進入動畫
    gsap.from(".reveal", { opacity: 0, y: 30, stagger: 0.1, duration: 1.2, ease: "power3.out" });
    
    // 背景繁星生成
    const bgLayer = document.getElementById('bg-layer');
    const shapeTypes = ['circle', 'square', 'triangle', 'star', 'diamond', 'line'];
    const numberOfShapes = 25;

    for (let i = 0; i < numberOfShapes; i++) {
        const shape = document.createElement('div');
        const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
        shape.className = `geo-shape shape-${type}`;
        shape.style.top = Math.random() * 100 + '%';
        shape.style.left = Math.random() * 100 + '%';
        shape.style.opacity = 0.1 + Math.random() * 0.15;
        bgLayer.appendChild(shape);

        // 異移動態
        const moveShape = () => {
            gsap.to(shape, {
                x: `+=${Math.random() * 20 - 10}vw`,
                y: `+=${Math.random() * 20 - 10}vh`,
                rotation: `+=${Math.random() * 72}`,
                duration: 2.5 + Math.random() * 3,
                ease: "sine.inOut",
                onComplete: moveShape
            });
        };
        moveShape();
    }
});

// 滑鼠互動
const cursor = document.getElementById('custom-cursor');
const charZone = document.getElementById('char-zone');
const heroTitle = document.getElementById('hero-title');

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 1024) {
        // 自定義游標跟隨
        gsap.to(cursor, { x: e.clientX - 12.5, y: e.clientY - 12.5, duration: 0.1 });
        
        // 視差效果
        const mouseX = (e.clientX - window.innerWidth / 2);
        const mouseY = (e.clientY - window.innerHeight / 2);
        
        gsap.to(charZone, { x: mouseX / 60, y: mouseY / 60, duration: 1.2 });
        gsap.to(heroTitle, { x: -mouseX / 80, y: -mouseY / 80, duration: 1.5 });
    }
});
