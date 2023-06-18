void sombra(int i) {
  float distancia = dist(mouseX - posX, mouseY - posY, 0, 0);
  float maxDistancia = tamano / 2;
  sombra = map(distancia, 0, maxDistancia, 0, 255);
}

void cuadrados(int i) {
  rectMode(CENTER);
  tamano = int(map(i, 0, cantidad, 400, 0));
  stroke(255);
  strokeWeight(2);
  fill(red(relleno), green(relleno), blue(relleno));
  rect(posX, posY, tamano, tamano);
  rectMode(CENTER);
  fill(red(colorSombra), green(colorSombra), blue(colorSombra), sombra);
  rect(posX, posY, tamano, tamano);
  fill(255);
  rect(posX, posY, 5, 5);
}

void reiniciar() {
  tamano = tamanoInicial;
  sombra = 0;
}



void mousePressed() {
  if (mouseButton == LEFT) {
    reiniciar();
    relleno = color(int(random(255)), int(random(255)), int(random(255)));
  }
}

void keyPressed() {
  if (key == 'r' || key == 'R') {
    reiniciar();
    relleno = color(0);
  }
}
