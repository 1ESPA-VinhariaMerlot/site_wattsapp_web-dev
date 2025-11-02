function trocar(cor) {
    document.body.style.backgroundColor = cor;
}

let imagens=[
    "src/assets/image1.jpg",
    "src/assets/image2.webp",
    "src/assets/image3.jpg",
    "src/assets/image4.jpg",
    "src/assets/image5.jpg",
    "src/assets/image12.jpg"
]

//DECLARANDO AS VARIAVEIS

let i = 0;
let tempo = 5000; // Milisegundos

// FUNÇÃO

function slideShow(){
    document.getElementById("image").src=imagens[i];
    i++;
    if(i == imagens.length){
        i = 0;
    }
    setTimeout(slideShow,tempo)
}
slideShow();