let info = document.getElementById("info");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");
let img7 = document.getElementById("img7");
let img8 = document.getElementById("img8");

const mostarTexto = () =>{
    info.textContent = img1.getAttribute("src");
}

img1.addEventListener("click",mostarTexto);
