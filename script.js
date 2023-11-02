let marcador1 = 0;
let marcador2 = 0;
const bolaElement = document.querySelector("#bola");
const WIDTH = 800;
const HEIGHT = 500;
let bola = { 
    x:0, y:0,
    direccion:false, //si va a la izq es false si no, true.
    color:"white",
    size:"5px",
    maxAltura:"600px",
    minAltura:"0",
    maxAnho:"1000px",
    minAncho:"0px",
    posicionBolaEjeX :400,
    posicionBolaEjeY : 250,
    velocidadX : 5,
    velocidadY : 5 
};


myCanvas.height = HEIGHT;
myCanvas.width = WIDTH;
let context = myCanvas.getContext("2d");
update();

const winSound=new Audio('audio/audio/crowd-cheer-ii-6263.mp3');
const hitSound=new Audio('audio/audio/laser-gun-72558.mp3');

window.onload = function(){
    requestAnimationFrame(update);
   //Hola
}

function update(){
    context.clearRect(0, 0, WIDTH, HEIGHT);

    context.font="45px Black Ops One ";
    context.fillText(marcador1, WIDTH/5, 45);
    context.fillText(marcador2, WIDTH*4/5 -45, 45);

    for(let i=0; i < HEIGHT; i+=9){
        context.fillRect(WIDTH/2 - 10, i, 5, 10);
    }
    
        context.clearRect(0, 0, myCanvas.width, myCanvas.height);
        context.beginPath();
        context.arc(bola.posicionBolaEjeX, bola.posicionBolaEjeY, 10, 0, 2 * Math.PI);
        context.fillStyle = "black";
        context.fill();
        
        bola.posicionBolaEjeX += bola.velocidadX;
        bola.posicionBolaEjeY += bola.velocidadY;
    
        if (bola.posicionBolaEjeX == WIDTH +20) {
            bola.posicionBolaEjeX = 400;
            bola.posicionBolaEjeY = 250;
            bola.velocidadX = -5;
            bola.velocidadY = -5;
        }
    
        if (bola.posicionBolaEjeX == -20){
            bola.posicionBolaEjeX = 400;
            bola.posicionBolaEjeY = 250;
            bola.velocidadX = 5;
            bola.velocidadY = 5;
        }
    
        if (bola.posicionBolaEjeY + 10 == HEIGHT || bola.posicionBolaEjeY - 10 == 0) {
            bola.velocidadY = -bola.velocidadY;
        }
    requestAnimationFrame(update);
}