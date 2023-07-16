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
    text("INICIAR", botonDosX, botonEnY-5);
  }
  if (pantalla == 14 || pantalla == 15 || pantalla == 16) {
    fill (0);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("RENICIAR", botonDosX, botonEnY-5);
  }
  if (pantalla > 0 && pantalla != 2 && pantalla != 10 && pantalla != 14  && pantalla != 15 && pantalla != 16) {
    fill (0);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("SIGUIENTE", botonTresX, botonEnY-5);
    text("ATRAS", botonUnoX, botonEnY-5);
  }
  if (pantalla == 2 || pantalla == 10) {
    fill (0);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("OPCION A", botonTresX, botonEnY-5);
    text("OPCION B", botonUnoX, botonEnY-5);
  }
}
void mouseMoved() {
  activado = true;
}
void mousePressed() {
  if (pantalla == 0 && mousePressed && activado) {
    if (mouseX > botonDosX - ancho/2 && mouseX < botonDosX + ancho/2 && mouseY > botonEnY - alto/2 && mouseY < botonEnY + alto/2) {
      pantalla = pantalla + 1;
      activado = false;
    }
  }
  if (pantalla == 14 || pantalla == 15 || pantalla == 16 && mousePressed && activado) {
    if (mouseX > botonDosX - ancho/2 && mouseX < botonDosX + ancho/2 && mouseY > botonEnY - alto/2 && mouseY < botonEnY + alto/2) {
      pantalla = 0;
      activado = false;
    }
  }
  if (pantalla > 0 && pantalla < 13 && mousePressed && activado) {
    if (mouseX > botonTresX - ancho/2 && mouseX < botonTresX + ancho/2 && mouseY > botonEnY - alto/2 && mouseY < botonEnY + alto/2) {
      pantalla = pantalla +1;
      activado = false;
    }
  }
  if (pantalla == 13 && mousePressed && activado) {
    if (mouseX > botonTresX - ancho/2 && mouseX < botonTresX + ancho/2 && mouseY > botonEnY - alto/2 && mouseY < botonEnY + alto/2) {
      pantalla = 16;
      activado = false;
    }
  }
  if (pantalla > 0 && pantalla <= 13  && pantalla != 2 && pantalla != 10 && mousePressed && activado) {
    if (mouseX > botonUnoX - ancho/2 && mouseX < botonUnoX + ancho/2 && mouseY > botonEnY - alto/2 && mouseY < botonEnY + alto/2) {
      pantalla = pantalla -1;
      activado = false;
    }
  }
  if (pantalla == 2 && mousePressed && activado) {
    if (mouseX > botonUnoX - ancho/2 && mouseX < botonUnoX + ancho/2 && mouseY > botonEnY - alto/2 && mouseY < botonEnY + alto/2) {
      pantalla = 14;
      activado = false;
    }
  }
  if (pantalla == 10 && mousePressed && activado) {
    if (mouseX > botonUnoX - ancho/2 && mouseX < botonUnoX + ancho/2 && mouseY > botonEnY - alto/2 && mouseY < botonEnY + alto/2) {
      pantalla = 15;
      activado = false;
    }
  }
}
