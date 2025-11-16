class FondoParallax {
  constructor(x,y,x2,Parallax,Background, monedasQueTieneElJugador) {
    this.posX = x;
    this.posY = y;
    this.posX2 = x2;
    this.posX3 = x;
    this.posX4 = x2;
    this.parallax = Parallax;
    this.backGround = Background;
    this.velocidad1 = 5;
    this.velocidad2 = 1;
  }
  dibujarImagenes() {
    image(this.backGround,this.posX3, this.posY,640,480);
    image(this.backGround,this.posX4, this.posY,640,480);
    image(this.parallax,this.posX, this.posY,640,480);
    image(this.parallax,this.posX2, this.posY,640,480);
    this.movimientoParallax();
  }

  movimientoParallax() {
    if (this.posX <= 0) {
      this.posX -= this.velocidad1+monedasQueTieneElJugador/10;
      this.posX2 -= this.velocidad1+monedasQueTieneElJugador/10;
        if (this.posX <= 0-640) {
        this.posX = 0;
        this.posX2 = 640;
      }
    }
    if (this.posX3 <= 0) {
      this.posX3 -= this.velocidad2+monedasQueTieneElJugador/10;
      this.posX4 -= this.velocidad2+monedasQueTieneElJugador/10;
        if (this.posX3 <= 0-640) {
        this.posX3 = 0;
        this.posX4 = 640;
      }
    }
  }
}
