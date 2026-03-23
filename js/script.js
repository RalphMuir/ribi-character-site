let currentTab = "profile";

/* TAB */
function switchTab(e,tab){
    currentTab = tab;

    document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
    e.target.classList.add("active");

    render();
}

/* 內容 */
function render(){
    const panel = document.getElementById("panel");

    if(currentTab==="profile"){
        panel.innerHTML = `
        <div class="profile">
            <img src="img/front_view.png">
            <img src="img/side_view.png">
            <img src="img/back_view.png">
        </div>`;
    }

    if(currentTab==="stream"){
        panel.innerHTML = `
        <iframe width="100%" height="220"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>`;
    }

    if(currentTab==="gallery"){
        panel.innerHTML = `
        <div class="gallery">
            <img src="img/g1.png" onclick="openLightbox(this.src)">
            <img src="img/g2.png" onclick="openLightbox(this.src)">
            <img src="img/g3.png" onclick="openLightbox(this.src)">
        </div>`;
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

/* 角色動畫 */
function nextChar(){
    const c=document.getElementById("char");
    c.style.transform="translateX(120px) scale(0.95)";
    setTimeout(()=>c.style.transform="translateX(0) scale(1)",300);
}

function prevChar(){
    const c=document.getElementById("char");
    c.style.transform="translateX(-120px) scale(0.95)";
    setTimeout(()=>c.style.transform="translateX(0) scale(1)",300);
}

/* 🎬 進場動畫 */
window.addEventListener("load",()=>{
    document.body.classList.add("show");
});

/* 粒子 */
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let p=[];
for(let i=0;i<50;i++){
    p.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2
    });
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    p.forEach(o=>{
        ctx.beginPath();
        ctx.arc(o.x,o.y,o.r,0,Math.PI*2);
        ctx.fillStyle="rgba(255,150,200,0.8)";
        ctx.fill();
    });
    requestAnimationFrame(draw);
}
draw();
