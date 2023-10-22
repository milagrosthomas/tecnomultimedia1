//thomas milagros tp5 comision 1
//link al video en YouTube https://youtu.be/MQFaR10d51M
let juego;
let alienImage;
let perdisteImage;
let ganasteImage;

function preload() {
  alienImage = loadImage('data/alien.png');
  perdisteImage = loadImage('data/perdiste.png');
  ganasteImage = loadImage('data/ganaste.png');
}

function setup() {
  createCanvas(900, 500);
  juego = new Juego();
  juego.iniciar();
}

function draw() {
  background(0, 0, 30);

  if (!juego.gameStarted) {
    fill(0, 100, 200);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Ayuda a La Farge y a Tom a escapar de los aldeanos.", width / 2, height / 2 - 90);
    text("Rompe todos los bloques para lograr salir con vida", width / 2, height / 2 - 50);
    textSize(25);
    text("Presiona enter para empezar", width / 2, height / 2);
  } else if (juego.gamePerdido) {
    image(perdisteImage, 0, 0, width, height);
    fill(0, 100, 200, 150);
    noStroke();
    rectMode(CENTER);
    rect(width / 2, height / 2, 600, 150);
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255, 0, 90);
    text("Perdiste, los aldeanos alcanzaron a Tom", width / 2, height / 2 - 20);
    fill(255);
    textSize(20);
    text("Presiona espacio para volver a intentar", width / 2, height / 2 + 20);
  } else if (juego.gameGan) {
    image(ganasteImage, 0, 0, width, height);
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(0, 255, 90);
    text("Ganaste, La Farge y Tom lograron escapar", width / 2, height / 2 - 20);
    fill(255);
    textSize(20);
    text("Presiona espacio para jugar de nuevo", width / 2, height / 2 + 20);
  } else {
    juego.actualizar();
    juego.mostrar();

    if (keyIsDown(LEFT_ARROW)) {
      juego.base.moveLeft();
    } else if (keyIsDown(RIGHT_ARROW)) {
      juego.base.moveRight();
    } else {
      juego.base.stopMoving();
    }
  }
}

function keyPressed() {
  console.log("Tecla presionada:", keyCode);

  if (keyCode === ENTER) {
    if (!juego.gameStarted) {
      juego.gameStarted = true;
      juego.pelota.speedX = 2;
      juego.pelota.speedY = -2;
      juego.gamePerdido = false;
      juego.gameGan = false;
      juego.reInicio = false;
    }
  } else if (juego.gamePerdido || juego.gameGan) {
    if (keyCode === 32) {
      if (juego.reInicio) {
        juego = new Juego(); 
        juego.iniciar(); 
      }
      juego.reInicio = true;
    }
  }
  if (juego.reInicio) {
    juego = new Juego(); 
    juego.iniciar(); 
    juego.reInicio = false; 
  }
}
