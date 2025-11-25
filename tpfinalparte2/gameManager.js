class GameManager {
  constructor() {
    this.MENU = 0;
    this.JUGANDO = 1;
    this.GAMEOVER = 2;
    this.GANASTE = 3;
    this.estadoActual = this.MENU;
    this.juego;
  }

  iniciarPartida() {
    this.juego = new Juego(parallax, backGround, spritesReyCorriendo, spriteReyCayendo, spriteReySaltando, spritesMonedas, spritesRata, spritesLobo, spritesPiedras, perdiste, sonidoMoneda, this);
  }

  maquinaDeEstados() {
    if (this.estadoActual === this.MENU) {
      image(imagenInicio, 0, 0, 640, 480);
      fill(255);
      textAlign(CENTER);
      text("Presiona ENTER para jugar", width/2, height/2);
    } else if (this.estadoActual === this.JUGANDO) {
      this.juego.iniciar();
      if (this.juego.jugador.puntaje == 100) {
        this.estadoActual = this.GANASTE;
      }
    } else if (this.estadoActual === this.GAME_OVER) {
      musica.stop();
      fill(0, 150);
      rect(0, 0, width, height);
      fill(255);
      textAlign(CENTER);
      image(perdiste, 0, 0, 640, 480);
      print("perdiste");
      text("Game Over\nPresiona R para reiniciar", width/2, height/2);
    } else if (this.estadoActual === this.GANASTE) {
      musica.stop();
      image(imagenGanaste, 0, 0, 640, 480, );
      fill(0, 150);
      rect(0, 0, width, height);
      fill(255);
      textAlign(CENTER);
      print("ganaste");
      text("Ganaste\nPresiona R para reiniciar", width/2, height/2);
    }
  }

  teclaPresionada() {
    if (this.estadoActual === this.MENU && keyCode === ENTER) {
      musica.loop();
      this.iniciarPartida();
      this.estadoActual = this.JUGANDO;
    } else if (this.estadoActual === this.JUGANDO) {
      this.juego.teclaPresionada();
    } else if (this.estadoActual === this.GAME_OVER && (key === 'r' || key === 'R')) {
      this.iniciarPartida();
      this.juego.jugador.puntaje = 0;
      this.estadoActual = this.MENU;
    } else if (this.estadoActual === this.GANASTE && (key === 'r' || key === 'R')) {
      this.iniciarPartida();
      this.juego.jugador.puntaje = 0;
      this.estadoActual = this.MENU;
    }
  }
}
