//thomas milagros tp4 comision 1
//link al video en YouTube https://youtu.be/E51E0yWocDs
let bx, by, ban, balt;
let px, py, ptam;
let shoot;
let bricks = [];
let brickWidth;
let brickHeight = 20;
let numFilas = 5;
let numColumnas;
let ballSpeedX = 4;
let ballSpeedY = 4;
let baseSpeed = 5;
let baseWidth = 100;
let gameStarted = false;
let bricksAlive;
let customFont;
let gameGan = false;
let bricksEliminados = 0;
let gamePerdido = false;
let reInicio = true;

function setup() {
  createCanvas(900, 500);
  ban = 10;
  balt = 100;
  bx = width / 2;
  by = height - balt / 2;
  px = bx;
  py = by - 15;
  ptam = 15;
  shoot = false;

  numColumnas = floor(width / 60);

  brickWidth = width / numColumnas;

  bricksAlive = numFilas * numColumnas;

  for (let i = 0; i < numFilas; i++) {
    bricks[i] = [];
    for (let j = 0; j < numColumnas; j++) {
      let brickX = j * brickWidth;
      let brickY = i * brickHeight + 50;
    bricks[i][j] = { x:
    brickX, y:
    brickY, alive:
      true
    };
  }
}
}

function draw() {
  background(0, 0, 30);

  if (!gameStarted) {

    textSize(24);
    textAlign(CENTER);
    if (gamePerdido) {
      fill(248, 0, 0, 200);
      textSize(80);
      text("¡Perdiste!", width / 2, height / 2 - 100);
      textSize(24);
      text("Presiona ESPACIO para reintentar", width / 2, height / 2);
    } else {
      fill(65, 105, 225);
      textSize(100);
      text("BREAKOUT", width / 2, height / 2 - 150);
      textSize(22);
      text("Rompe todos los ladrillos para ganar", width / 2, height / 2);
      text("Usa las flechas para mover la base y asi evitar que la pelotita caiga.", width / 2, height / 2 + 30);
      text("Presiona ENTER para comenzar", width / 2, height / 2 + 60);
    }
  } else if (gameGan) {
    showCreditos();
  } else {
    if (keyIsDown(RIGHT_ARROW) && bx + baseWidth / 2 < width) {
      bx += baseSpeed;
    }
    if (keyIsDown(LEFT_ARROW) && bx - baseWidth / 2 > 0) {
      bx -= baseSpeed;
    }

    for (let i = 0; i < numFilas; i++) {
      for (let j = 0; j < numColumnas; j++) {
        if (bricks[i][j].alive) {
          brick(bricks[i][j].x, bricks[i][j].y, brickWidth, brickHeight);

          if (
            px + ptam / 2 > bricks[i][j].x &&
            px - ptam / 2 < bricks[i][j].x + brickWidth &&
            py + ptam / 2 > bricks[i][j].y &&
            py - ptam / 2 < bricks[i][j].y + brickHeight
            ) {
            bricks[i][j].alive = false;
            ballSpeedY *= -1;
            bricksAlive--;
            bricksEliminados++;
          }
        }
      }
    }

    px += ballSpeedX;
    py += ballSpeedY;

    if (px + ptam / 2 > width || px - ptam / 2 < 0) {
      ballSpeedX *= -1;
    }
    if (py - ptam / 2 < 0) {
      ballSpeedY *= -1;
    }

    if (
      py + ptam / 2 > by - 5 &&
      py - ptam / 2 < by &&
      px + ptam / 2 > bx - baseWidth / 2 &&
      px - ptam / 2 < bx + baseWidth / 2
      ) {
      ballSpeedY *= -1;
      let offsetX = px - bx;
      let normOffset = map(offsetX, -baseWidth / 2, baseWidth / 2, -1, 1);
      ballSpeedX = normOffset * 5;
    }

    if (bricksAlive === 0) {
      gameGan = true;
    }
  }

  if (py + ptam / 2 > height) {
    px = bx;
    py = by - 15;
    ballSpeedX = 0;
    ballSpeedY = -1;
    gameStarted = false;
    gamePerdido = true;
  }

  base(bx, by, ban, balt);
  ball(px, py, ptam);

  fill(224, 255, 255);
  textSize(18);
  textAlign(RIGHT, TOP);
  text("Ladrillos Eliminados: " + bricksEliminados, width - 10, 10);
}

function keyPressed() {
  if (keyCode === ENTER) {
    if (!gameStarted) {
      gameStarted = true;
      ballSpeedX = 0;
      ballSpeedY = -3;
      gamePerdido = false;
    }
  } else if (keyCode === 32) {
    if (gamePerdido) {
      gamePerdido = false;
      reiniciarJuego();
    }
  } else if (key === "r" && reInicio) {
    gameGan = false;
    reInicio = false;
    reiniciarJuego();
  }
}

function brick(x, y, ancho, alto) {
  if (y >= 50) {
    fill(31, 81, 255, 230);
    rectMode(CORNER);
    rect(x, y, ancho, alto);
  }
}

function ball(x, y, diam) {
  fill(224, 255, 255);
  circle(x, y, diam);
}

function base(x, y, ancho, alto) {
  fill(0, 139, 139);
  rectMode(CENTER);
  rect(x, y, alto, ancho);
}

function showCreditos() {
  background(230, 230, 250);
  fill(65, 105, 225, 200);
  textAlign(CENTER);
  textSize(80);
  text("¡Ganaste!", width / 2, height / 2 - 100);
  textSize(24);
  text("Inspirado en el juego desarrollado y distribuido por Atari, diseñado por Nolan Bushnell y Steve Bristow.", width / 2, height / 2, 600);
  text("Presiona 'r' para reiniciar", width / 2, height / 2 + 80);
  reInicio = true;
}

function reiniciarJuego() {
  bx = width / 2;
  by = height - balt / 2;
  px = bx;
  py = by - 15;
  ballSpeedX = 0;
  ballSpeedY = -1;
  bricksAlive = numFilas * numColumnas;
  bricksEliminados = 0;

  for (let i = 0; i < numFilas; i++) {
    for (let j = 0; j < numColumnas; j++) {
      bricks[i][j].alive = true;
    }
  }
}
