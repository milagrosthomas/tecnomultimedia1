void dibujarFoto(int numero) {
  image(foto[numero], 0, 0);
}

void relatarHistoria(int frase, int textoX, int textoY) {
  textAlign(CENTER, CENTER);
  if (pantalla == 0) {
    fill (255);
    textSize(32);
    text(relato[frase], textoX, textoY, 500, 300);
  }
  if (pantalla > 0) {
    fill (255);
    textSize(14);
    text(relato[frase], textoX, textoY, 500, 300);
  }
}

void dibujarBoton(int x, int y, int ladoX, int ladoY) {
  fill (255);
  rectMode(CENTER);
  rect(x, y, ladoX, ladoY);
  if (pantalla == 0) {
    fill (0);
    textAlign(CENTER, CENTER);
    text("Iniciar", botonDosX, botonEnY-5);
  }
  if (pantalla == 14 || pantalla == 15 || pantalla == 16) {
    fill (0);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Reiniciar", botonDosX, botonEnY-5);
  }
  if (pantalla > 0 && pantalla != 2 && pantalla != 10 && pantalla != 14  && pantalla != 15 && pantalla != 16) {
    fill (0);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Adelante", botonTresX, botonEnY-5);
    text("Atras", botonUnoX, botonEnY-5);
  }
  if (pantalla == 2 || pantalla == 10) {
    fill (0);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Opcion A", botonTresX, botonEnY-5);
    text("Opcion B", botonUnoX, botonEnY-5);
  }
}
void mouseMoved() {
  activado = true;
}
void mousePressed() {

  if (pantalla == 0 && verificarBoton(botonDosX, botonEnY, ancho, alto) == true) {
    pantalla = pantalla + 1;
  } else if ((pantalla == 14 || pantalla == 15 || pantalla == 16) && verificarBoton(botonDosX, botonEnY, ancho, alto) == true) {
    pantalla = 0;
  } else if (pantalla > 0 && pantalla < 13 && verificarBoton(botonTresX, botonEnY, ancho, alto) == true) {
    pantalla = pantalla + 1;
  } else if (pantalla == 13 && verificarBoton(botonTresX, botonEnY, ancho, alto) == true) {
    pantalla = 16;
  } else if ((pantalla <= 13 && pantalla != 2 && pantalla != 10) && verificarBoton(botonUnoX, botonEnY, ancho, alto) == true) {
    pantalla = pantalla - 1;
  } else if (pantalla == 2 && verificarBoton(botonUnoX, botonEnY, ancho, alto) == true) {
    pantalla = 14;
  } else if (pantalla == 10 && verificarBoton(botonUnoX, botonEnY, ancho, alto) == true) {
    pantalla = 15;
    activado = true;
  } else {
    activado = false;
  }
}

boolean verificarBoton(int xBoton, int y, int ancho, int alto) {
  if (mouseX > xBoton - ancho/2 && mouseX < xBoton + ancho/2 && mouseY > y - alto/2 && mouseY < y + alto/2) {
    return  true;
  } else {
    return false;
  }
}
