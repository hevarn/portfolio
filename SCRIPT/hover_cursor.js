const cercle1 = document.querySelector(".cercle1");
const cercle2 = document.querySelector(".cercle2");
const cercle3 = document.querySelector(".cercle3");
const cercle4 = document.querySelector(".cercle4");
const cercle5 = document.querySelector(".cercle5");
const cercle6 = document.querySelector(".cercle6");


window.addEventListener("mousemove", (e) => {
    cercle1.style.left = e.x + "px";
    cercle1.style.top = e.y + "px";
    setTimeout(() => {
        cercle2.style.left = e.x + "px";
        cercle2.style.top = e.y + "px";
    }, 25);
    setTimeout(() => {
        cercle3.style.left = e.x + "px";
        cercle3.style.top = e.y + "px";
    }, 50);
    setTimeout(() => {
        cercle4.style.left = e.x + "px";
        cercle4.style.top = e.y + "px";
    }, 75);
    setTimeout(() => {
        cercle5.style.left = e.x + "px";
        cercle5.style.top = e.y + "px";
    }, 100);
    setTimeout(() => {
        cercle6.style.left = e.x + "px";
        cercle6.style.top = e.y + "px";
    }, 125);
    
} );

