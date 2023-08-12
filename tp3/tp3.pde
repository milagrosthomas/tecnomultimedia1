//thomas milagros recuperatorio tp3 comision 1
//link al video en YouTube https://youtu.be/j_FOVIRugbk
PImage[] foto;
PFont t;
String[] relato;
int pantalla, cantidad;
int textoEnX, textoEnY;
int botonUnoX, botonDosX, botonTresX, botonEnY, ancho, alto;
boolean activado;
boolean verificarBoton = false;

void setup() {
  size(600, 600);
  pantalla = 0;
  cantidad = 17;
  textoEnX = width/2;
  textoEnY = 300;
  t = loadFont("Georgia-Italic-48.vlw");
  foto = new PImage[cantidad];
  for (int i = 0; i < cantidad; i++) {
    foto[i] = loadImage("imagenes/Imagen" + i + ".jpg");
    foto[i].resize(width, height);
  }
  textFont(t);
  relato = loadStrings("texto.txt");
  botonUnoX = width/2 - width/4;
  botonDosX = width/2;
  botonTresX = width/2 + width/4;
  botonEnY = 500;
  ancho = 120;
  alto = 40;
}

void draw() {
  dibujarFoto(pantalla);
  if (pantalla > 0 && pantalla != 16) {
    fill (0, 100);
    rectMode (CENTER);
    rect (textoEnX, textoEnY, 500, 300);
  }
  relatarHistoria(pantalla, textoEnX, textoEnY);
  if (pantalla == 0 || pantalla == 14 || pantalla == 15 || pantalla == 16) {
    dibujarBoton(botonDosX, botonEnY, ancho, alto);
  }
  if (pantalla > 0 && pantalla != 14  && pantalla != 15 && pantalla != 16) {
    dibujarBoton(botonUnoX, botonEnY, ancho, alto);
    dibujarBoton(botonTresX, botonEnY, ancho, alto);
  }
  println (pantalla);
}
