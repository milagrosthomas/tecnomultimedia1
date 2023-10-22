class Juego {
  constructor() {
    this.base = new Base();
    this.pelota = new Pelota();
    this.bricks = [];
    this.numFilas = 5;
    this.numColumnas = 15;
    this.brickWidth = width / this.numColumnas;
    this.brickHeight = 20;
    this.bricksAlive = this.numFilas * this.numColumnas;
    this.gameStarted = false;
    this.bricksEliminados = 0;
    this.gamePerdido = false;
    this.reInicio = false;
    this.gameGan = false;
  }

  iniciar() {
    for (let i = 0; i < this.numFilas; i++) {
      this.bricks[i] = [];
      for (let j = 0; j < this.numColumnas; j++) {
        let brickX = j * this.brickWidth;
        let brickY = i * this.brickHeight + 50;
        this.bricks[i][j] = new Ladrillo(brickX, brickY);
      }
    }
  }

  actualizar() {
    if (this.gameStarted) {
      this.base.actualizar();
      this.pelota.actualizar();

      if (
        this.pelota.y + this.pelota.diam / 2 > this.base.y - 10 &&
        this.pelota.x > this.base.x - this.base.width / 2 &&
        this.pelota.x < this.base.x + this.base.width / 2
        ) {
        this.pelota.speedY *= -1;
      }

      for (let i = 0; i < this.numFilas; i++) {
        for (let j = 0; j < this.numColumnas; j++) {
          let brick = this.bricks[i][j];
          if (brick.alive) {
            if (
              this.pelota.x + this.pelota.diam / 2 > brick.x &&
              this.pelota.x - this.pelota.diam / 2 < brick.x + brick.width &&
              this.pelota.y + this.pelota.diam / 2 > brick.y &&
              this.pelota.y - this.pelota.diam / 2 < brick.y + brick.height
              ) {
              this.pelota.speedY *= -1;
              brick.alive = false;
              this.bricksEliminados++;
            }
          }
        }
      }

      if (this.pelota.y + this.pelota.diam / 2 > height) {
        this.gameStarted = true;
        this.gamePerdido = true;
      }


      if (this.bricksEliminados >= 75) {
        this.gameStarted = true;
        this.gameGan = true;
      }
    }
  }
  reInicio() {
    if (this.reInicio) {
      this.base = new Base();
      this.pelota = new Pelota();
      this.bricks = [];
      this.bricksEliminados = 0;
      this.gameStarted = false;
      this.gamePerdido = false;
      this.gameGan = false;
      this.iniciar();
      this.reInicio = false;
    }
  }
  mostrar() {
    this.base.mostrar();
    this.pelota.mostrar();


    for (let i = 0; i < this.numFilas; i++) {
      for (let j = 0; j < this.numColumnas; j++) {
        this.bricks[i][j].mostrar();
      }
    }
  }
}
