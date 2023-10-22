class Base {
  constructor() {
    this.x = width / 2;
    this.y = height - 10;
    this.width = 100;
    this.isMovingLeft = false;
    this.isMovingRight = false;
    this.speed = 5;
  }

  mostrar() {
    fill(0, 139, 139);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, 20);
  }

  moveLeft() {
    this.isMovingLeft = true;
    this.isMovingRight = false;
  }

  moveRight() {
    this.isMovingRight = true;
    this.isMovingLeft = false;
  }

  stopMoving() {
    this.isMovingLeft = false;
    this.isMovingRight = false;
  }

  actualizar() {
    if (this.isMovingLeft) {
      this.x -= this.speed;
    }
    if (this.isMovingRight) {
      this.x += this.speed;
    }
    this.x = constrain(this.x, this.width / 2, width - this.width / 2);
  }
}
