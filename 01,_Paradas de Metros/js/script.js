let info = document.getElementById("info");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");
let img7 = document.getElementById("img7");
let img8 = document.getElementById("img8");

const mostarTextoimg1 = () =>{
    info.textContent = img1.getAttribute("src");
}

const mostarTextoimg2 = () =>{
    info.textContent = img2.getAttribute("src");
}

const mostarTextoimg3 = () =>{
    info.textContent = img3.getAttribute("src");
}

const mostarTextoimg4 = () =>{
    info.textContent = img4.getAttribute("src");
}

const mostarTextoimg5 = () =>{
    info.textContent = img5.getAttribute("src");
}

img1.addEventListener("click",mostarTextoimg1);
img2.addEventListener("click",mostarTextoimg2);
img3.addEventListener("click",mostarTextoimg3);
img4.addEventListener("click",mostarTextoimg4);