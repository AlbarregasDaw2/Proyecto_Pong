const bolaElement = document.querySelector("#bola");
const myCanvas = document.querySelector("#myCanvas");
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
pintarRectanguloCanvas();
moverBola();



function moverBola() {
    
    context.clearRect(0, 0, myCanvas.width, myCanvas.height);
    context.beginPath();
    context.arc(bola.posicionBolaEjeX, bola.posicionBolaEjeY, 10, 0, 2 * Math.PI);
    context.fillStyle = "white";
    context.fill();
    
    bola.posicionBolaEjeX += bola.velocidadX;
    bola.posicionBolaEjeY += bola.velocidadY;
    
    requestAnimationFrame(moverBola);
}


function pintarRectanguloCanvas(){
    context.fillStyle = "black";
    context.fillRect(0, 0, WIDTH, HEIGHT);
}