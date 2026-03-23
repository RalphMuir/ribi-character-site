/* 角色資料 */
const chars = [
{
    name:"Ribi",
    info:"Age:19<br>Height:158cm",
    img:"img/full-body.png",
    profile:`
        <h3>Profile</h3>
        <img src="img/front_view.png" width="80">
        <img src="img/side_view.png" width="80">
        <img src="img/back_view.png" width="80">
    `,
    stream:`
        <iframe width="100%" height="150"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
    `,
    gallery:`
        <div class="gallery">
            <img src="img/g1.png">
            <img src="img/g2.png">
            <img src="img/g3.png">
        </div>
    `
}
];

let current = 0;
let mode = "profile";

/* DOM */
const nameEl = document.getElementById("charName");
const infoEl = document.getElementById("charInfo");
const imgEl = document.getElementById("mainChar");
const leftPage = document.getElementById("pageLeft");
const rightPage = document.getElementById("pageRight");
const book = document.getElementById("book");

/* 更新 */
function update(){
    const c = chars[current];

    nameEl.innerHTML = c.name;
    infoEl.innerHTML = c.info;
    imgEl.src = c.img;

    if(mode==="profile"){
        leftPage.innerHTML = c.profile;
        rightPage.innerHTML = c.stream;
    }
    else if(mode==="gallery"){
        leftPage.innerHTML = c.gallery;
        rightPage.innerHTML = c.profile;
    }
}

/* 切角色 */
function nextChar(){
    current = (current+1)%chars.length;
    update();
}

function prevChar(){
    current = (current-1+chars.length)%chars.length;
    update();
}

/* 點擊翻頁 */
book.addEventListener("click",()=>{
    book.classList.toggle("flip");

    mode = (mode==="profile") ? "gallery" : "profile";
    update();
});

/* 初始 */
update();

/* 粒子 */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let p=[];

for(let i=0;i<50;i++){
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
