let currentTab = "profile";

function switchTab(e,tab){
    currentTab = tab;

    document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
    e.target.classList.add("active");

    render();
}

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
        <iframe width="100%" height="200"
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

function openLightbox(src){
    document.getElementById("lightbox").style.display="flex";
    document.getElementById("lightbox-img").src=src;
}

function closeLightbox(){
    document.getElementById("lightbox").style.display="none";
}

function nextChar(){
    const c=document.getElementById("char");
    c.style.transform="translateX(100px)";
    setTimeout(()=>c.style.transform="translateX(0)",300);
}

function prevChar(){
    const c=document.getElementById("char");
    c.style.transform="translateX(-100px)";
    setTimeout(()=>c.style.transform="translateX(0)",300);
}

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
        ctx.fillStyle="pink";
        ctx.fill();
    });
    requestAnimationFrame(draw);
}
draw();
