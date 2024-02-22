function circulo() {
    let figura =document.getElementById("figura");
    let titulo =document.getElementById("titulo");

    figura.classList.toggle("circulo");
    titulo.innerHTML="CIRCULO";
    
}

function rectangulo() {
    let figura =document.querySelector("#figura");
    let titulo =document.getElementById("titulo");

    figura.classList.toggle("rectangulo");
    titulo.innerHTML="RECTANGULO";
}

function moveRight(){
    let figura = document.getElementById("figura");
    let titulo =document.getElementById("titulo");

    alert("Estas moviendo la figura hacia la derecha.");
    figura.classList.toggle("right");
    titulo.innerHTML="RIGHT"
}

function degradado(){
    let figura =document.getElementById("figura");
    let titulo =document.getElementById("titulo");

    figura.classList.toggle("degradado");
    titulo.innerHTML="DEGRADADO"
}

function gif(){
    let figura =document.getElementById("figura");
    let titulo =document.getElementById("titulo");

    figura.classList.toggle("gif");
    titulo.innerHTML="GIF"
}

function luna(){
    let figura =document.getElementById("figura");
    let titulo =document.getElementById("titulo");

    figura.classList.toggle("luna");
    titulo.innerHTML="LUNA"
}

function estrella(){
    let figura =document.getElementById("figura");
    let titulo =document.getElementById("titulo");

    figura.classList.toggle("estrella");
    titulo.innerHTML="ESTRELLA"
}

function triangulo(){
    let figura =document.getElementById("figura");
    let titulo =document.getElementById("titulo");

    figura.classList.toggle("triangulo")
    titulo.innerHTML="TRIANGULO"
}

function moveTop(){
    let figura = document.getElementById("figura");
    let titulo =document.getElementById("titulo");

    alert("Estas moviendo la figura hacia arriba.");
    figura.classList.toggle("top");
    titulo.innerHTML="TOP"
}

function moveBottom(){
    let figura = document.getElementById("figura");
    let titulo =document.getElementById("titulo");

    alert("Estas moviendo la figura hacia abajo.");
    figura.classList.toggle("Bottom");
    titulo.innerHTML="BOTTOM"
}

function moveLeft(){
    let figura = document.getElementById("figura");
    let titulo =document.getElementById("titulo");

    alert("Estas moviendo la figura hacia la izquierda.");
    figura.classList.toggle("Left");
    titulo.innerHTML="LEFT"
}

function Diagonal(){
    let figura = document.getElementById("figura");
    let titulo =document.getElementById("titulo");

    alert("Estas moviendo la figura en diagonal.");
    figura.classList.toggle("Diagonal");
    titulo.innerHTML="DIAGONAL"
}

function fondo(){
    let body = document.body;
    let titulo =document.getElementById("titulo");
    alert("Estas haciendo cambio de fondo.");

    body.classList.toggle("fondo");
    titulo.innerHTML="BACKGROUND GENERAL"
}

function panelLateral(){
    let panel =document.getElementById("panel-lateral");
    let titulo =document.getElementById("titulo");

    panel.classList.toggle("active")
    titulo.innerHTML="PANEL LATERAL"
}

function panelSuperior(){
    let panelS =document.getElementById("panel-superior");
    let titulo =document.getElementById("titulo");

    panelS.classList.toggle("active");
    titulo.innerHTML="PANEL SUPERIOR"
}

function bgfondo(){
    let color = prompt("¿Qué color desea poner el fondo?");
    let fondo =document.getElementById("fondo");

    alert("Estas haciendo cambio de fondo.");
    fondo.style.background= color;
}
