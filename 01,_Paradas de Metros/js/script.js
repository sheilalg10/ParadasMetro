const imagenes = ["alexanderplatz.jpeg", "hermannplatz.jpeg", "jungfernheide.jpeg",
    "konstanzer.jpeg", "kurfurstenstrabe.jpeg", "paulsternstrasse.jpeg",
    "unterdenlinden.jpeg", "westhafen.jpeg"];

let info = document.getElementById("info");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");
let img7 = document.getElementById("img7");
let img8 = document.getElementById("img8");
let main = document.getElementsByTagName("main");

// const mostarTextoimg1 = () =>{
//     info.textContent = img1.src.slice(img1.src.lastIndexOf("/")+1,img1.src.lastIndexOf("."));;
// }

// const mostarTextoimg2 = () =>{
//     info.textContent = img2.src.slice(img2.src.lastIndexOf("/")+1,img2.src.lastIndexOf("."));
// }

// const mostarTextoimg3 = () =>{
//     info.textContent = img3.src.slice(img3.src.lastIndexOf("/")+1,img3.src.lastIndexOf("."));
// }

// const mostarTextoimg4 = () =>{
//     info.textContent = img4.src.slice(img4.src.lastIndexOf("/")+1,img4.src.lastIndexOf("."));
// }

// const mostarTextoimg5 = () =>{
//     info.textContent = img5.src.slice(img5.src.lastIndexOf("/")+1,img5.src.lastIndexOf("."));
// }

// const mostarTextoimg6 = () =>{
//     info.textContent = img6.src.slice(img6.src.lastIndexOf("/")+1,img6.src.lastIndexOf("."));
// }

// const mostarTextoimg7 = () =>{
//     info.textContent = img7.src.slice(img7.src.lastIndexOf("/")+1,img7.src.lastIndexOf("."));
// }

// const mostarTextoimg8 = () =>{
//     info.textContent = img8.src.slice(img8.src.lastIndexOf("/")+1,img8.src.lastIndexOf("."));
// }


// img1.addEventListener("click",mostarTextoimg1);
// img2.addEventListener("click",mostarTextoimg2);
// img3.addEventListener("click",mostarTextoimg3);
// img4.addEventListener("click",mostarTextoimg4);
// img5.addEventListener("click",mostarTextoimg5);
// img6.addEventListener("click",mostarTextoimg6);
// img7.addEventListener("click",mostarTextoimg7);
// img8.addEventListener("click",mostarTextoimg8);

const clickImagen = (img) =>{
    let pos;

    do{
        pos=Math.floor(Math.random()*imagenes.length);
    }while (imagenes[pos] == img.src.slice(img.src.lastIndexOf("/")+1));

    img.src="imagenes/"+ imagenes[pos];
    info.textContent=img.src.slice(img1.src.lastIndexOf("/")+1,img8.src.lastIndexOf("."));

}


// img1.addEventListener("click",()=> clickImagen(img1));
// img2.addEventListener("click",()=> clickImagen(img2));
// img3.addEventListener("click",()=> clickImagen(img3));
// img4.addEventListener("click",()=> clickImagen(img4));
// img5.addEventListener("click",()=> clickImagen(img5));
// img6.addEventListener("click",()=> clickImagen(img6));
// img7.addEventListener("click",()=> clickImagen(img7));
// img8.addEventListener("click",()=> clickImagen(img8));


main.addEventListener("click",(event)=>{
    if(event.target.tagName == "IMG"){
        clickImagen(event.target)
    }
})