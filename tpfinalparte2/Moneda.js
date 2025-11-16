class Moneda {
  constructor(Jugador, spritesMonedas, monedasQueTieneElJugador, sonidoMoneda) {
    this.posX = 1000;
    this.posY = height/2-100;
    this.velocidadMoneda =5
    this.jugador = Jugador;
    this.avanzar = true;
    this.spriteMoneda = new SpriteMoneda();
  }
  dibujar() {
    this.spriteMoneda.dibujarSprite(this.posX,this.posY, spritesMonedas);
    this.movimientoX();
    this.colisionConJugador();
  }

  detenerse() {
    this.avanzar = false;
    this.posX = 1000;
  }

  movimientoX() {
    if (this.posX > -20 && this.avanzar == true) {
      this.posX -= this.velocidadMoneda;
      if (this.posX <= -20) {
        this.posX = random(1040, 670);
      } 
    }
  }

  colisionConJugador() {
    if (dist(this.posX, this.posY, this.jugador.posX, this.jugador.posY) <= 80) {
      sonidoMoneda.play();
      this.jugador.puntaje += 2;
      monedasQueTieneElJugador +=2;
      this.posX = random(1040, 670);
    }
  }
}
