let currentTab = "profile";

/* TAB切換 */
function switchTab(tab){
    currentTab = tab;

    document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
    event.target.classList.add("active");

    render();
}

/* 渲染內容 */
function render(){
    const panel = document.getElementById("panel");

    if(currentTab==="profile"){
        panel.innerHTML = `
        <div class="profile">
            <img src="img/front_view.png">
            <img src="img/side_view.png">
            <img src="img/back_view.png">
        </div>
        `;
    }

    if(currentTab==="stream"){
        panel.innerHTML = `
        <iframe width="100%" height="200"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"></iframe>
        `;
    }

    if(currentTab==="gallery"){
        panel.innerHTML = `
        <div class="gallery">
            <img src="img/g1.png" onclick="openLightbox(this.src)">
            <img src="img/g2.png" onclick="openLightbox(this.src)">
            <img src="img/g3.png" onclick="openLightbox(this.src)">
        </div>
        `;
    }
}

render();

/* 燈箱 */
function openLightbox(src){
    document.getElementById("lightbox").style.display="flex";
    document.getElementById("lightbox-img").src=src;
}

function closeLightbox(){
    document.getElementById("lightbox").style.display="none";
}

/* 角色切換 */
function nextChar(){
    const char = document.getElementById("char");
    char.style.transform="translateX(100px)";

    setTimeout(()=>{
        char.style.transform="translateX(0)";
    },300);
}

function prevChar(){
    const char = document.getElementById("char");
    char.style.transform="translateX(-100px)";

    setTimeout(()=>{
        char.style.transform="translateX(0)";
    },300);
}

/* 粒子 */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let p=[];

for(let i=0;i<60;i++){
    p.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2,
        dx:(Math.random()-0.5)*0.5,
        dy:(Math.random()-0.5)*0.5
    });
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    p.forEach(o=>{
        ctx.beginPath();
        ctx.arc(o.x,o.y,o.r,0,Math.PI*2);
        ctx.fillStyle="pink";
        ctx.fill();
        o.x+=o.dx;
        o.y+=o.dy;
    });
    requestAnimationFrame(draw);
}
draw();

/* 滑鼠視差 */
document.addEventListener("mousemove",(e)=>{
    let x = (e.clientX/window.innerWidth -0.5)*20;
    let y = (e.clientY/window.innerHeight -0.5)*20;

    document.querySelector(".main-char").style.transform =
        `translate(${x}px,${y}px)`;
});
