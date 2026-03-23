/* Tabs */
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab=>{
    tab.addEventListener("click",()=>{
        tabs.forEach(t=>t.classList.remove("active"));
        tab.classList.add("active");

        const target = tab.dataset.tab;

        contents.forEach(c=>c.classList.remove("active"));
        document.getElementById(target).classList.add("active");
    });
});

/* 粒子 */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){
    particles.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        r: Math.random()*2+1,
        dx: (Math.random()-0.5)*0.6,
        dy: (Math.random()-0.5)*0.6
    });
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle="rgba(255,150,200,0.7)";
        ctx.fill();

        p.x+=p.dx;
        p.y+=p.dy;

        if(p.x<0||p.x>canvas.width) p.dx*=-1;
        if(p.y<0||p.y>canvas.height) p.dy*=-1;
    });

    requestAnimationFrame(draw);
}

draw();

/* 視差（滑鼠） */
document.addEventListener("mousemove",(e)=>{
    const x = (e.clientX/window.innerWidth - 0.5)*20;
    const y = (e.clientY/window.innerHeight - 0.5)*20;

    document.querySelector(".main-char").style.transform =
        `translate(${x}px, ${y}px)`;
});

/* resize 修正 */
window.addEventListener("resize",()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
