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

//players
let max = 440;
let min = 10;
let playerWidth = 10;
let playerHeight = 50;
let movement = 10;

let player1 = {
    x : 10,
    y : HEIGHT/2,
    width: playerWidth,
    height: playerHeight,
    velocityY: 0
}

let player2 = {
    x : WIDTH - playerWidth - 10,
    y : HEIGHT/2,
    width: playerWidth,
    height: playerHeight,
    velocityY: 0
}

myCanvas.height = HEIGHT;
myCanvas.width = WIDTH;
let context = myCanvas.getContext("2d");
update();

const winSound=new Audio('audio/audio/crowd-cheer-ii-6263.mp3');
const hitSound=new Audio('audio/audio/laser-gun-72558.mp3');

window.onload = function(){
    requestAnimationFrame(update);

    //draw initial player1
    context.fillStyle="black";
    context.fillRect(player1.x, player1.y, playerWidth, playerHeight);

    document.addEventListener("keydown", movePlayer);
}

function update(){
    context.clearRect(0, 0, WIDTH, HEIGHT);

    context.font="45px Black Ops One ";
    context.fillText(marcador1, WIDTH/5, 45);
    context.fillText(marcador2, WIDTH*4/5 -45, 45);

    for(let i=0; i < HEIGHT; i+=9){
        context.fillRect(WIDTH/2 - 10, i, 5, 10);
    }
    
    context.beginPath();
    context.arc(bola.posicionBolaEjeX, bola.posicionBolaEjeY, 10, 0, 2 * Math.PI);
    context.fillStyle = "black";
    context.fill();

    // player1
    context.fillStyle = "black";
    let nextPlayer1Y = player1.y + player1.velocityY;
    if (!outOfBounds(nextPlayer1Y)) {
        player1.y = nextPlayer1Y;
    }
    // player1.y += player1.velocityY;
    context.fillRect(player1.x, player1.y, playerWidth, playerHeight);

    // player2
    let nextPlayer2Y = player2.y + player2.velocityY;
    if (!outOfBounds(nextPlayer2Y)) {
        player2.y = nextPlayer2Y;
    }
    // player2.y += player2.velocityY;
    context.fillRect(player2.x, player2.y, playerWidth, playerHeight);
    
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

function outOfBounds(yPosition) {
    return (yPosition < 0 || yPosition + playerHeight > HEIGHT);
}

function movePlayer(e) {
    //player1 movement up
    if (e.code == "KeyW") {
        if(player1.y > min){
            player1.y = player1.y - movement;
            console.log(player1.y);
        }
    }
    //player1 movement down
    if (e.code == "KeyS") {
        if(player1.y < (max)){
            player1.y = player1.y + movement;
            console.log(player1.y);
        }
    }

    //player2 mevement up
    if (e.code == "ArrowUp") {
        if(player2.y > min){
            player2.y = player2.y - movement;
            console.log(player2.y);
        }
    }
    //player2 mevement down
    if (e.code == "ArrowDown") {
        if(player2.y < max){
            player2.y = player2.y + movement;
            console.log(player2.y);
        }
    }
}