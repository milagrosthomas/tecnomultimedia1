class App {
  constructor() {
    this.imagenes = [];
    this.botones = [];
    this.textos = [];
    this.pantallaActual = 0;
    this.relatoManager = new RelatoManager();
    this.juego = new Juego();
    for (let i = 0; i <= 12; i++) {
      if (i !== 6) {
        this.imagenes[i] = loadImage("data/imagenes/" + i + ".jpg");
      }
    }
    this.actualizarBotones();
    this.juegoActivo = false;
  }

  actualizarBotones() {
    this.botones = [];

    if (this.pantallaActual === 0) {

      const xInicio = width / 2;
      const yInicio = 800 - 75;
      this.botonInicio = new BotonInicio(xInicio, yInicio, "Iniciar");
      this.botones.push(this.botonInicio);
    }

    if (this.pantallaActual >= 1 && this.pantallaActual !== 0 && this.pantallaActual !== 5 && this.pantallaActual !== 11 && this.pantallaActual !== 12) {
      const xAtras = 100;
      const yAtras = 800 - 75;
      const xSiguiente = 950 - 100;
      const ySiguiente = 800 - 75;

      this.botonAtras = new Boton(xAtras, yAtras, "Atrás");
      this.botonSiguiente = new Boton(xSiguiente, ySiguiente, "Siguiente");

      this.botones.push(this.botonAtras);
      this.botones.push(this.botonSiguiente);
    }

    if (this.pantallaActual === 11 || this.pantallaActual === 12) {
      const xInicio = width / 2;
      const yInicio = 800 - 75;
      this.botonInicio = new BotonInicio(xInicio, yInicio, "Reiniciar");
      this.botones.push(this.botonInicio);
    }

    if (this.pantallaActual === 5) {
      const xInicio = width / 2;
      const yInicio = 800 - 75;
      this.botonInicio = new BotonInicio(xInicio, yInicio, "Comenzar");
      this.botones.push(this.botonInicio);
    }
  }


  dessiner() {
    console.log("Pantalla actual:", this.pantallaActual);
    background(0);

    if (this.pantallaActual === 6) {
      if (!this.juegoActivo) {
        this.juego.jugar();
        this.juegoActivo = true;
      }

      if (this.juegoActivo && this.juego) {
        this.juego.jugar();

        if (this.juego.estado === "ganaste") {
          this.pantallaActual = 8;
          this.actualizarBotones();
          this.juego = null;
        } else if (this.juego.estado === "perdiste") {
          this.pantallaActual = 7;
          this.actualizarBotones();
          this.juego = null;
        } else if (this.juego) {
          this.juego.jugar();
        }
      }
    } else {

      // En otras pantallas, muestra la imagen correspondiente
      image(this.imagenes[this.pantallaActual], 0, 0, width, height);
      this.relatoManager.escribirRelato(this.pantallaActual);

      for (let i = 0; i < this.botones.length; i++) {
        this.botones[i].dibujar();

        if (this.pantallaActual === 5 && this.botones[i] instanceof BotonInicio) {
          if (this.botones[i].clicEnBoton() && mouseIsPressed) {
            this.pantallaActual = 6;
            this.juego.jugar();
            this.juegoActivo = true;
          }
        }
      }
    }
  }


  mousePresionado() {
    for (let i = 0; i < this.botones.length; i++) {
      if (this.botones[i].clicEnBoton()) {
        if (this.botones[i] instanceof BotonInicio && this.pantallaActual === 0) {
          this.pantallaActual = 1;
        } else if (this.pantallaActual === 6 && this.botones[i] instanceof BotonInicio) {
          if (!this.juegoActivo) {
            this.iniciarJuego();
            this.juegoActivo = true;
          }
        } else if (this.botones[i] instanceof Boton && this.pantallaActual >= 1 && this.pantallaActual <= 4) {
          if (i === 0) {
            this.pantallaActual = max(0, this.pantallaActual - 1);
          } else if (i === 1) {
            this.pantallaActual = min(5, this.pantallaActual + 1);
          }
        } else if (this.pantallaActual === 7 && this.botones[i] instanceof Boton) {
          if (i === 0) {
            this.pantallaActual = 7;
            this.juego = new Juego();
          } else if (i === 1) {
            this.pantallaActual = 9;
          }
        } else if (this.pantallaActual === 8 && this.botones[i] instanceof Boton) {
          if (i === 0) {
            this.pantallaActual = 5;
            this.juego = new Juego();
          } else if (i === 1) {
            this.pantallaActual = 10;
          }
        } else if (this.pantallaActual === 10 && this.botones[i] instanceof Boton) {
          if (i === 0) {
            this.pantallaActual = 8;
          } else if (i === 1) {
            this.pantallaActual = 12;
          }
        } else if (this.pantallaActual === 12 && this.botones[i] instanceof Boton) {
          if (i === 0) {
            this.pantallaActual = 0;
            this.juego = new Juego();
          }
        } else if (this.pantallaActual === 9 && this.botones[i] instanceof Boton) {
          if (i === 0) {
            this.pantallaActual = 7;
          } else if (i === 1) {
            this.pantallaActual = 11;
          }
        } else if (this.pantallaActual === 11 && this.botones[i] instanceof Boton) {
          if (i === 0) {
            this.pantallaActual = 0;
            this.juego = new Juego();
          }
        }

        if (this.juego && this.juego.estado === "ganaste") {
          this.pantallaActual = 8;
          this.actualizarBotones();
          this.juego = null;
        } else if (this.juego && this.juego.estado === "perdiste") {
          this.pantallaActual = 9;
          this.actualizarBotones();
          this.juego = null;
        } else {
          this.actualizarBotones();
          this.relatoManager.frameContador = 0;
        }
      }
    }
  }

  keyPressed() {
    if (this.juego) {
      this.juego.keyPressed();
    }
  }

  keyReleased() {
    if (this.juego) {
      this.juego.keyReleased();
    }
  }
}
