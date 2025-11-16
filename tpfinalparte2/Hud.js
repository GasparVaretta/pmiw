class Hud {
  constructor(Jugador, perdiste) {
    this.jugador = Jugador;
    this.perdiste = perdiste;
  }
  dibujarHud() {
    fill(255);
    text("Oro Recolectado: "+this.jugador.puntaje, 100, 50);
  }
  perder() {
  }
}
