//thomas milagros tp2 comision 1
//link al video en YouTube https://youtu.be/ETlye8FkMFY
//pido una disculpa por el tema del video, no tengo todavia una buena computadora que me banque grabar pero hice lo mejor que pude con lo que tengo.

PImage opart;
int cantidad = 21;
int tamanoInicial = 400;
int tamano;
float sombra;
int posX, posY;
color relleno = color(0);
color colorSombra = color(160, 20);


void setup() {
  size(800, 400);
  opart = loadImage("downloadfile.jpg");
  image(opart, 0, 0, 400, 400);
  reiniciar();
  posX = width / 2 + width / 4;
  posY = height / 2;
}

void draw() {
  for (int i = 0; i < cantidad; i++) {
    for (int j = 0; j < cantidad; j++) {
      sombra(i);
      cuadrados(i);
    }
  }
}
