class Jugador {
  constructor(hud, spritesReyCorriendo, spriteReyCayendo, spriteReySaltando){
    this.puntaje = 0;
    this.posX = width/2;
    this.posY = 290
    this.spriteRey = new SpriteRey(this.posX, this.posY);
    this.saltando = false;
    this.cayendo = false;
    this.alturamaxima = height/2-100;
    this.alturaMinima = 290;
    this.hud = new Hud();
    this.perdiste =false;
  }

  dibujar(frameCorrerYMoneda, frameSaltoYCaida) {
    this.spriteRey.dibujarSprite(this.posX, this.posY, spritesReyCorriendo, spriteReyCayendo, spriteReySaltando, frameCorrerYMoneda, frameSaltoYCaida,this.saltando, this.cayendo);
    this.salto();
    print("puntaje"+ this.puntaje);
  }
 
  perder() {
    this.hud.perder();
    this.perdiste = true;
  }

  salto() {
    if (this.perdiste == false) {
      if (this.saltando == true) {
        this.posY -= 6;
        if (this.posY <= this.alturamaxima) {
          this.saltando = false;
          this.cayendo = true;
        }
      } else if (this.cayendo == true) {
        this.posY += 4;
        if (this.posY >= this.alturaMinima) {
          this.posY = this.alturaMinima;
          this.cayendo = false;
        }
      }
    }
  }

  teclaPresionada() {
    this.spriteRey.teclaPresionada();
    if (key == 'w' || key == 'W' || key == ' '|| keyCode == UP_ARROW) {
      if (this.saltando == false && this.cayendo == false) {
        this.saltando = true;
      }
    }
  }
}
