class Ladrillo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 20;
    this.alive = true;
  }

  mostrar() {
    if (this.alive) {
      fill(31, 81, 255, 230);
      rectMode(CORNER);
      rect(this.x, this.y, this.width, this.height);
    }
  }
}
