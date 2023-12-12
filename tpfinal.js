// Milagros Thomas y Falero Daiana
//tp final Tecno Multimedia 1
let app;


function setup() {
  createCanvas(950, 800);
  app = new App();
}


function draw() {
   app.dessiner();
  }


function mousePressed() {
  app.mousePresionado();
}

function keyPressed() {
  app.keyPressed();
}


function keyReleased() {
  app.keyReleased();
}
