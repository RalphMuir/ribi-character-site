const base = "img/";

/* 工具：圖片不存在就隱藏 */
function safeSetImg(el, path){
    if(!path){
        el.style.display = "none";
        return;
    }

    const img = new Image();
    img.onload = ()=> {
        el.src = path;
        el.style.display = "block";
    };
    img.onerror = ()=> {
        el.style.display = "none";
    };
    img.src = path;
}

/* 角色資料（你可以慢慢補） */
const characters = [
{
    name:"Ribi",
    info:"Age:19<br>Height:158cm",

    main: base + "full-body.png",
    front: base + "front_view.png",
    side: base + "side_view.png",
    back: base + "back_view.png",

    bg: base + "bg1.jpg"
},
{
    name:"Coming Soon",
    info:"???",

    main: "",
    front: "",
    side: "",
    back: "",

    bg: ""
}
];

/* 建立 swiper */
const wrapper = document.getElementById("swiper-wrapper");

characters.forEach(c=>{
    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    slide.innerHTML = `
        <div style="height:100px;display:flex;align-items:center;justify-content:center;">
            ${c.main ? `<img src="${c.main}" style="height:100%">` : "?"}
        </div>
    `;

    wrapper.appendChild(slide);
});

const swiper = new Swiper(".mySwiper",{
    slidesPerView:1.5,
    centeredSlides:true,
    loop:true
});

/* DOM */
const nameEl = document.getElementById("char-name");
const infoEl = document.getElementById("char-info");
const mainChar = document.getElementById("main-char");
const front = document.getElementById("front");
const side = document.getElementById("side");
const back = document.getElementById("back");
const bg = document.getElementById("bg");

/* 更新角色 */
function updateCharacter(i){
    const c = characters[i];

    nameEl.innerHTML = c.name;
    infoEl.innerHTML = c.info;

    safeSetImg(mainChar, c.main);
    safeSetImg(front, c.front);
    safeSetImg(side, c.side);
    safeSetImg(back, c.back);

    if(c.bg){
        bg.style.backgroundImage = `url(${c.bg})`;
    }else{
        bg.style.background = "#111";
    }
}

/* 初始 */
updateCharacter(0);

/* 切換 */
swiper.on("slideChange",()=>{
    updateCharacter(swiper.realIndex);
});

/* 視差 */
document.addEventListener("mousemove",(e)=>{
    const x = (e.clientX/window.innerWidth - 0.5)*20;
    const y = (e.clientY/window.innerHeight - 0.5)*20;

    bg.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
});
