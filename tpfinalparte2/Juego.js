class Juego {
  constructor(Parallax, Background, spritesReyCorriendo, spriteReyCayendo, spriteReySaltando, spritesMonedas, spritesRata, spritesLobo, spritesPiedras, perdiste, sonidoMoneda,MANAGER) {
    this.manager = MANAGER;
    this.frameCorrerYMoneda = 0;
    this.frameSaltoYCaida = 0;
    this.frameRata = 0;
    this.frameLobo = 0;
    this.parallax =Parallax;
    this.backGround =Background
    this.jugador = new Jugador(Hud, spritesReyCorriendo,spriteReyCayendo, spriteReySaltando);
    this.obstaculos = new Obstaculo(this, this.jugador, spritesRata, spritesLobo, spritesPiedras);
    this.moneda = new Moneda(this.jugador, spritesMonedas, sonidoMoneda);
    this.fondoParallax = new FondoParallax(Parallax, Background, this.jugador);
    this.hud = new Hud(this.jugador, perdiste);
  }

  dibujarFondo() {
    this.fondoParallax.dibujarImagenes();
  }

  iniciar() {
    if (frameCount % 5 === 0) {
      this.frameCorrerYMoneda++;
      this.frameSaltoYCaida++;
      this.frameRata++;
      this.frameLobo++;
    }
    if (this.frameCorrerYMoneda > 7) {
      this.frameCorrerYMoneda = 0;
    }
    if (this.frameSaltoYCaida > 1) {
      this.frameSaltoYCaida = 0;
    }
    if (this.frameRata > 5) {
      this.frameRata = 0;
    }
    if (this.frameLobo > 3) {
      this.frameLobo = 0;
    }
    this.dibujarFondo();
    this.jugador.dibujar(this.frameCorrerYMoneda, this.frameSaltoYCaida);
    this.obstaculos.dibujar(this.frameRata, this.frameLobo);
    this.moneda.dibujar(this.frameCorrerYMoneda)
    this.hud.dibujarHud();
  }

  perderJuego() {
    this.jugador.perder();
    this.manager.estadoActual = this.manager.GAME_OVER;
    this.moneda.detenerse();
  }

  ganarJuego() {
    this.manager.estadoActual = this.manager.GANASTE;
  }
  
  teclaPresionada() {
    this.jugador.teclaPresionada();
  }
}
