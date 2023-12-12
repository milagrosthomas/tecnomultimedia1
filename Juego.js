class Juego {
  constructor() {
    this.estado = "juego";
    this.pos1 = height / 2;
    this.pos2 = height / 2;
    this.x = 300;
    this.y = 200;
    this.dirX = 1;
    this.dirY = -1;
    this.puntosJugador1 = 0;
    this.puntosJugador2 = 0;
    this.ganador = 0;
    this.imagenenfondo = loadImage("data/imagenes/fondo.jpg");
    this.tiempoEspera = 2000;
    this.ultimoTiempoColision = 0;
  }

  reiniciar() {
    this.estado = "juego";
    this.pos1 = height / 2;
    this.pos2 = height / 2;
    this.x = 300;
    this.y = 200;
    this.dirX = 1;
    this.dirY = -1
      this.puntosJugador1 = 0;
    this.puntosJugador2 = 0;
    this.ultimoTiempoColision = 0;
  }

  actualizar() {
    if (this.estado !== "juego") {
      return;
    }
    if (this.puntosJugador1 >= 10) {
      this.estado = "ganaste";
      console.log("¡Ganaste! Jugador 1 ha alcanzado 10 puntos.");
    }

    if (this.puntosJugador2 >= 10) {
      this.estado = "perdiste";
      console.log("¡Perdiste! Jugador 2 ha alcanzado 10 puntos.");
    }
  }

jugar() {
    image(this.imagenenfondo, 0, 0, width, height);
    fill(250);
    rect(width / 14, this.pos1, 20, 150); // Jugador 1
    rect(width - width / 14, this.pos2, 20, 150); // Jugador 2
    stroke(255);
    line(width / 2, 0, width / 2, height);
    circle(this.x, this.y, 30, 30);
    this.detectarColision();

    if (keyIsDown(65)) {
      this.pos1 = constrain(this.pos1 - 4, 0, height - 80);
    }

    if (keyIsDown(90)) {
      this.pos1 = constrain(this.pos1 + 4, 0, height - 80);
    }

    if (keyIsDown(UP_ARROW)) {
      this.pos2 = constrain(this.pos2 - 4, 0, height - 80);
    }

    if (keyIsDown(DOWN_ARROW)) {
      this.pos2 = constrain(this.pos2 + 4, 0, height - 80);
    }

    this.x = this.x + 2 * this.dirX;
    this.y = this.y + 2 * this.dirY;

    if (this.y > height || this.y < 0) {
      this.dirY *= -1;
    }

    if (this.x < 30) {
    if (this.y > this.pos1 && this.y < this.pos1 + 80) {
      this.dirX = 1;
      this.aumentarVelocidad();
      console.log("Colisión con Jugador 1. Puntos Jugador 1: " + this.puntosJugador1);
    } else {
      this.puntosJugador2++;
      console.log("Jugador 2 no golpeó la pelota. Puntos Jugador 1: " + this.puntosJugador1);
      this.reiniciarPosicionPelota();
    }
  }

  if (this.x > width - 30) {
    if (this.y > this.pos2 && this.y < this.pos2 + 80) {
      this.dirX = -1;
      this.aumentarVelocidad();
      console.log("Colisión con Jugador 2. Puntos Jugador 2: " + this.puntosJugador2);
    } else {
      this.puntosJugador1++;
      console.log("Jugador 1 no golpeó la pelota. Puntos Jugador 2: " + this.puntosJugador2);
      this.reiniciarPosicionPelota();
    }
  }

    textSize(20);
    fill(255);
    textSize(32);
    textAlign(RIGHT);
    text("Puntos P1: " + this.puntosJugador1, 200, 30);
    textAlign(LEFT);
    text("Puntos P2: " + this.puntosJugador2, width - 200, 30);

    this.actualizar();
  }

 detectarColision() {
  const radioPelota = 15;
  const tiempoActual = millis();
  const tiempoTranscurrido = tiempoActual - this.ultimoTiempoColision;

  if (tiempoTranscurrido >= this.tiempoEspera) {
    if (
      this.x - radioPelota < width / 15 + 10 &&
      this.y > this.pos1 &&
      this.y < this.pos1 + 150 &&
      this.x > 50 &&
      this.y > this.pos1 && this.y < this.pos1 + 150
    ) {
      this.dirX = 1;
      this.dirY *= -1;
      this.aumentarVelocidad();
      console.log("Colisión con Jugador 1.");

      this.ultimoTiempoColision = tiempoActual;
    }

    if (
      this.x + radioPelota > width - width / 14 - 10 &&
      this.y > this.pos2 &&
      this.y < this.pos2 + 150 &&
      this.x < width - 30 &&
      this.y > this.pos2 && this.y < this.pos2 + 150
    ) {
      this.dirX = -1;
      this.dirY *= -1;
      this.aumentarVelocidad();
      console.log("Colisión con Jugador 2.");

      this.ultimoTiempoColision = tiempoActual;
    }

    if (this.x < 20 || this.x > width - 20) {
      this.puntosJugador1++;
      this.puntosJugador2++;
      console.log("La pelota salió del campo. Puntos Jugador 1: " + this.puntosJugador1 + ", Puntos Jugador 2: " + this.puntosJugador2);
      this.reiniciarPosicionPelota();
    }
  }
}

  aumentarVelocidad() {
    this.dirX *= 1.25;
    this.dirY *= 1.1;
  }

  reiniciarPosicionPelota() {
    this.x = width / 2;
    this.y = height / 2;
  }

  determinarGanador() {
    if (this.x < 20) {
      return 2;
    }

    if (this.x > width - 20) {
      return 1;
    }

    return 0;
  }


  keyPressed() {

    console.log("Tecla presionada en el juego");
  }

  keyReleased() {

    console.log("Tecla liberada en el juego");
  }
}
