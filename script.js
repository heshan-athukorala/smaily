const dates =[
    "You are my favorite reson to smile every single day💖.",
    "Forever gratful for love💖,laughter and warmth in my life.🤞🤗",
    "My heart found home the moments it met you there.😘💗",
    "With you💙,ordinary moments ture into beautiful forever memories.💌",
    "Every day😍👭 feels brighter when love is shared with you."
];

document.getElementById("datetext").textContent =dates [Math.floor(Math.random() * dates.length)];

const canvas = document.getElementById("scretchcanvas");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 500;

const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, "#FF69C5");
gradient.addColorStop(0.5, "#FC3A61");
gradient.addColorStop(0, "#FF69C5");
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "white";
ctx.font = "40px Love Ya Like A Sister";
ctx.textAlign = "center";
ctx.fillText("Sretch Me!(First)", 300, 250);

let scratching = false;
function scratch(x,y) {
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, Math.PI * 2);
    ctx.fill();
}

canvas.addEventListener("mousedown", () => (scratching = true));
canvas.addEventListener("mouseup", () => (scratching = false));
canvas.addEventListener("mousemove", (e) => {
    if(!scratching) return;
    const rect =canvas.getBoundingClientRect();
    scratch(e.clientX - rect.left, e.clientY-rect.top);

});

canvas.addEventListener("touchmove", (e) => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    scratch(touch.clientX - rect.left, touch.clientY - rect.top);
});

document.getElementById("newcard").addEventListener("click", () =>{
    document.getElementById("datetext").textContent = dates [Math.floor(Math.random() * dates.length)];

    ctx.globalCompositeOperation = "source-over";



    const gradient = ctx.creatLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#FF69C5");
    gradient.addColorStop(0.5, "#FC3A61");
    gradient.addColorStop(0, "#FF69C5");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "40px Love Ya Like A Sister";
    ctx.textAlign = "center";
    ctx.fillText("Scretch Me!(First)", 300, 250);
});



















