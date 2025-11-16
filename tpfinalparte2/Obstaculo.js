class Obstaculo{
  constructor(Juego, Jugador, frameRata,frameLobo, spritesRata, spritesLobo, spritesPiedras){
    this.juego = Juego;
    this.posX = 1000;
    this.posY = 290;
    this.velocidadObstaculo =3
    this.spriteObstaculo = new SpriteObstaculo(this.posX, this.posY);
    this.jugador = Jugador;
    this.avanzar = true;
    this.spriteAleatoreo = 1;
  }
  
  dibujar() {
    this.spriteObstaculo.dibujarSprite(this.posX, this.posY, frameRata,frameLobo, spritesRata, spritesLobo, spritesPiedras, this.spriteAleatoreo);
    this.movimientoX();
    this.colisionConJugador(this.spriteAleatoreo);
  }
  
  movimientoX() {
    if(this.posX > -20 && this.avanzar == true){
      this.posX -= round(this.velocidadObstaculo+ this.jugador.puntaje/10);
      if(this.posX <= -20){
        this.posX = random(1040,670);
        this.spriteAleatoreo = round(random(1,4));
        print("sprite aleatorio cambió, ahora es: "+this.spriteAleatoreo);
      }
    }
  }
  
  colisionConJugador(spriteAleatoreo){
    if(dist(this.posX,this.posY,this.jugador.posX, this.jugador.posY) <= 20){
      this.juego.perderJuego();
      this.avanzar = false;
      this.spriteAleatoreo = round(random(1,4));
    }
  }
}
