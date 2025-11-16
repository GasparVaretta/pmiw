class Juego {
  constructor(Parallax, Background,spritesReyCorriendo,frameCorrerYMoneda, frameSaltoYCaida, frameRata, spriteReyCayendo, spriteReySaltando, spritesMonedas, spritesRata, spritesLobo, spritesPiedras, spriteAleatoreo, monedasQueTieneElJugador, perdiste, sonidoMoneda) {
    this.parallax =Parallax;
    this.backGround =Background
    this.jugador = new Jugador(Hud, Moneda,spritesReyCorriendo,frameCorrerYMoneda, frameSaltoYCaida, frameRata, spriteReyCayendo, spriteReySaltando);
    this.obstaculos = new Obstaculo(this,this.jugador, frameRata,frameLobo, spritesRata, spritesLobo, spritesPiedras);
    this.moneda = new Moneda(this.jugador, spritesMonedas, monedasQueTieneElJugador, sonidoMoneda);
    let x =0, y = 0, x2 =640;
    this.fondoParallax = new FondoParallax(x, y, x2, parallax, backGround, monedasQueTieneElJugador);
    this.hud = new Hud(this.jugador, perdiste);
  }

  dibujarFondo() {
    this.fondoParallax.dibujarImagenes();
  }

  iniciar() {
    this.dibujarFondo();
    this.jugador.dibujar();
    this.obstaculos.dibujar();
    this.moneda.dibujar()
    this.hud.dibujarHud();
  }
  
perderJuego() {
  this.jugador.perder();
  estadoActual = GAME_OVER;
  this.moneda.detenerse();
}

ganarJuego() {
  estadoActual = GANASTE;
}

  reiniciar() {
  }
  teclaPresionada() {
    this.jugador.teclaPresionada();
  }
}
