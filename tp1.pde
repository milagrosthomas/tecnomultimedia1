//thomas milagros
//tp1 comision 1

PFont t;
PFont e;
PFont m;
PFont o;
PImage Maldivas1;
PImage Maldivas2;
PImage Maldivas3;
PImage Maldivas4;
float l = 0;
float s = 0;
float z = 0;
int x = 500;
int y = 400;
int w = 100;
int h = 45;
boolean button1= false;
boolean button2 = false;
int segundos = 0;
int estado = 0;
boolean arranca = false;
String texto = "Las aguas Maldivias son el hogar de diversos ecosistemas,\n pero se destacan por su variedad de coloridos arrecifes de coral,\n hogar de 1100 especies de peces,\n 5 especies de tortugas marinas, 21 especies de ballenas y delfines,\n 187 especies de coral, 400 especies de moluscos y\n 83 especies de equinodermos.";
float c = 550;
float k = 380;

void setup() {
  size(640, 480);
  t = loadFont ("CambriaMath-48.vlw");
  e = loadFont ("Georgia-Italic-48.vlw");
  m = loadFont ("Microsoft_Himalaya-48.vlw");
  o = loadFont ("LucidaConsole-48.vlw");
  Maldivas1 = loadImage ("Maldivas 1.png");
  Maldivas2 = loadImage ("Maldivas 2.png");
  Maldivas3 = loadImage ("Maldivas 3.png");
  Maldivas4 = loadImage ("Maldivas 4.png");
}

void draw() {
  image (Maldivas1, 0, 0, 640, 480);
  fill (255);
  textFont (t);
  text ("República de Maldivas", width/2, l);
  textAlign(CENTER);
  l += 1;
  if (l >= 90) {
    l = 90;
  } else {
    l += 1;
  }
  if ((mouseX > x) && (mouseX < x+w) && (mouseY > y) && (mouseY < y+h)) {
    noStroke();
    fill (0, 0, 255, 50);
  } else {
    noStroke();
    fill(255);
  }
  rect(x, y, w, h);
  fill (0);
  textSize(25);
  text("Iniciar", 550, 430);
  if ((mouseX > x) && (mouseX < x+w) && (mouseY > y) && (mouseY < y+h && mousePressed)) {
    button1= true;
    button2= true;
  }
  if (button1 || button2) {
    segundos++;
    if (arranca == true) {
      if (arranca) {
        println ("valor = ", segundos);
      }
    }
    if (segundos > 0 && segundos <= 150) {
      image (Maldivas2, 0, 0, 640, 480);
      textFont (e);
      textSize (25);
      textAlign (CENTER);
      fill (0);
      text ("Maldivas, como es más conocido, \n es un país insular soberano \n situado en el océano Índico, \n cuya forma de gobierno es la república presidencial", s, 190);
      s += 1;
      if (s >= 317) {
        s = 317;
      } else {
        s += 1;
      }
      textFont (e);
      textSize (25);
      textAlign (CENTER);
      fill (255);
      text ("Maldivas, como es más conocido, \n es un país insular soberano \n situado en el océano Índico, \n cuya forma de gobierno es la república presidencial", s, 187);
      s += 1;
      if (s >= 315) {
        s = 315;
      } else {
        s += 1;
      }
    }
    if (segundos > 150 && segundos <= 300) {
      image (Maldivas3, 0, 0, 640, 480);
      textFont (m);
      textSize (40);
      textAlign (CENTER);
      fill (80);
      text("Su territorio está organizado en 26 atolones.\n La capital y, a la vez, la ciudad más poblada es Malé,\n con una población de 103 693 habitantes.", width/2, z);
    }
    z -= 1.5;
    if (z < -480) {
      z = 480;
    } else {
      z -= 1.5;
    }
    if (segundos > 300) {
      image (Maldivas4, 0, 0, 640, 480);
      textFont (o);
      textSize (15);
      textAlign (CENTER);
      fill (0);
      text("Las aguas Maldivias son el hogar de diversos ecosistemas,\n pero se destacan por su variedad de coloridos arrecifes de coral,\n hogar de 1100 especies de peces,\n 5 especies de tortugas marinas, 21 especies de ballenas y delfines,\n 187 especies de coral, 400 especies de moluscos y\n 83 especies de equinodermos.", c, k);
      c -= 2;
      k -= 2;
      if (c < 550 && k < 380) {
      }
      if ((mouseX > x) && (mouseX < x+w) && (mouseY > y) && (mouseY < y+h)) {
        noStroke();
        fill (0, 0, 255, 50);
      } else {
        noStroke();
        fill(255);
      }
      rect(x, y, w, h);
      fill (0);
      textSize(18);
      text("Reiniciar", 550, 430);
      if ((mouseX > x) && (mouseX < x+w) && (mouseY > y) && (mouseY < y+h && mousePressed)) {
        button2= true;
        segundos =0;
      }
    }
  }
}





void mousePressed() {
  if (button1== true || button2== true) {
  } else {
    arranca = true;
  }
}
