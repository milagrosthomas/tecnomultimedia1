class RelatoManager {
  constructor() {
    this.colorFondoTexto = color(255);
    this.colorRelato = color(205, 0, 255);
    this.calcularPosiciones();
    this.relato = ["\n \n \n \n \n \n \n \n \n \n \n El Marciano \nde Ray Bradbury \n \nAdaptación: Milagros Thomas y \n Daiana Falero.  \n \nTecnología Multimedial I."
      , "\n \n \n \n \n \n \n \n \n \n \n La Farge y Anna observan la lluvia azul desde su casa, \n deseando haber traído a su hijo Tom con ellos. Mientras se preparan para dormir,\n La Farge escucha un sonido y se detiene, pero Anna no oye nada."
      , "\n \n \n \n \n \n \n \n \n \n \n La Farge, intrigado por un silbido, \nva hacia la puerta y encuentra una figura en el patio,\n parecida a Tom. Un rayo revela el rostro de la figura. \n Anna le pide a La Farge que cierre la puerta, temiendo por su seguridad."
      , "\n \n \n \n \n \n \n \n \n \n \n A la mañana siguiente, La Farge busca a Tom y lo encuentra sano y salvo. \nconfundido, cuestiona la identidad de Tom, pensando en la posibilidad de ser un marciano. \nTom evade las preguntas y disfrutan de un almuerzo tranquilo."
      , "\n \n \n \n \n \n \n \n \n \n \n La familia decide ir al pueblo. Tom se niega al principio, \npero finalmente accede. En el pueblo, Tom desaparece, \ny La Farge se encuentra con revelaciones sobre Lavinia Spaulding, \nquien aparentemente ha regresado después de ser considerada muerta. \nLa Farge en seguida se dirige a la casa de los Spaulding para confirmar sus sospechas"
      , "\n \n \n \n \n \n \n \n \n \n \n Al llegar a casa de los Spaulding, La Farge encuentra \na Tom y le pide que vuelva, el Sr. Spaulding \nlo ve e inmediatamente intenta sacarlo de ahi. \n Con las flechas de arriba y abajo toma el lugar de La Farge y rescata a Tom \nCon la A y la Z ayuda al sr. Spaulding a conservar a Lavinia"
      , ""
      , "\n \n \n \n \n \n \n \n \n \n \n Las sombras se movieron. Y al fin la voz dijo: 'Bueno, papá' \nLa ágil figura de un niño se deslizó por la parra \na la luz de las lunas. La Farge abrió los brazos para recibirlo. \nLa Farge y Tom vuelven con Anna y los tres viven \nfelices para siempre."
      , "\n \n \n \n \n \n \n \n \n \n \n L4avinia decide quedarse donde esta, con la familia Spaulding, \nVive feliz siendo la hija unica de los Spaulding. \nLa Farge se va rendido, cuando su esposa le pregunta por Tom, \nel solo le dice que el ya no volvera, con una tristeza enorme, \nambos suben al bote y se van de nuevo a casa."
      , "\n \n \n \n \n \n \n \n \n \n \n Al otro dia, La Farge y Anna desayunan con Tom, \nambos, aun sabiendo que el Tom que esta con ellos \nno es el verdadero, si no un marciano \ncambia formas\nlo aceptan de igual manera \nde todos modos, es lo mas cercano a Tom que jamas tendran."
      , "\n \n \n \n \n \n \n \n \n \n \n alli fueron directamente a acostarse, '!Escucha!' dice La Farge, '¿Has oido algo?'. \n'Nada, nada' dice Anna. 'Voy a mirar, de todos modos' \n Atravesó a tientas el cuarto oscuro, y esperó algún tiempo al lado de la puerta de la calle. \nAl final abrió y miró afuera. La lluvia caía desde el cielo negro, \nsobre el patio desierto, sobre el canal y entre las montañas azules. \nLa Farge esperó cinco minutos y después, suavemente, \ncon las manos húmedas, entró en la casa, cerró la puerta y echó el cerrojo."
      , "\n \n \n \n \n \n \n \n \n \n \n ¿Queres intentar conseguir el otro final?"
      , "\n \n \n \n \n \n \n \n \n \n \n ¿Queres intentar conseguir el otro final?"]
   
    this.frameContador = 0;
    this.framesEspera = 30;
     }

  calcularPosiciones() {
    this.textoEnX = 950 * 0.5;
    this.textoEnY = 800 * 0.25;
  }

  calcularTamanos() {
    this.textoSize = min(950, 800) * 0.03;
    this.rectAncho = min(950, 800) * 0.5;
    this.rectAlto = min(950, 800) * 0.5;
  }

  escribirRelato(oracion) {
    noStroke();
    this.calcularPosiciones();
    this.calcularTamanos();
    if (this.frameContador >= this.framesEspera) {
      rectMode(CENTER);
      fill(0, 125);
      rect(this.textoEnX, this.textoEnY * 1.8, this.rectAncho * 2, this.rectAlto);
      fill(255, 255);
      textSize(this.textoSize);
      textAlign(CENTER);
      text(this.relato[oracion], this.textoEnX, this.textoEnY, this.rectAncho * 2, this.rectAlto * 2);
    } else {
      this.frameContador++;
    }
  }

  procesarRelato() {
    for (let i = 0; i < this.relato.length; i++) {
      this.relato[i] = this.relato[i].replace(/\\n/g, '\n');
    }
  }
}
