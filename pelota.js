class Pelota {
  constructor() {
    this.x = width / 2;
    this.y = height - 100;
    this.diam = 40;
    this.speedX = 4;
    this.speedY = -4;
  }

  mostrar() {
    image(alienImage, this.x - this.diam / 2, this.y - this.diam / 2, this.diam, this.diam);
  }

  actualizar() {
    this.x += this.speedX;
    this.y += this.speedY;


    if (this.x - this.diam / 2 < 0 || this.x + this.diam / 2 > width) {
      this.speedX *= -1;
    }

    if (this.y - this.diam / 2 < 0) {
      this.speedY *= -1;
    } else if (this.y + this.diam / 2 > height) {
      juego.gameStarted = false;
    }
  }
}
