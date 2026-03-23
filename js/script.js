const characters = [
{
    name:"Ribi",
    info:"Age:19<br>Height:158cm<br>Cheerful",
    main:"img/char1.png",
    front:"img/front1.png",
    side:"img/side1.png",
    back:"img/back1.png",
    bg:"img/bg1.jpg"
},
{
    name:"Ribi 2",
    info:"Age:20<br>Height:160cm<br>Mysterious",
    main:"img/char2.png",
    front:"img/front2.png",
    side:"img/side2.png",
    back:"img/back2.png",
    bg:"img/bg2.jpg"
}
];

const swiperWrapper = document.getElementById("swiper-wrapper");

/* 建立滑動角色 */
characters.forEach((c,i)=>{
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `<img src="${c.main}" style="width:100%">`;
    swiperWrapper.appendChild(slide);
});

/* 初始化 */
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

/* 切角色 */
function updateCharacter(index){
    const c = characters[index];

    nameEl.innerHTML = c.name;
    infoEl.innerHTML = c.info;

    mainChar.src = c.main;
    front.src = c.front;
    side.src = c.side;
    back.src = c.back;

    bg.style.backgroundImage = `url(${c.bg})`;
}

/* 初始 */
updateCharacter(0);

/* 滑動時切換 */
swiper.on("slideChange",()=>{
    const index = swiper.realIndex;
    updateCharacter(index);
});

/* 視差（滑鼠） */
document.addEventListener("mousemove",(e)=>{
    const x = (e.clientX/window.innerWidth - 0.5)*20;
    const y = (e.clientY/window.innerHeight - 0.5)*20;

    bg.style.transform = `scale(1.2) translate(${x}px, ${y}px)`;
});
