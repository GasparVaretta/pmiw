class SpriteMoneda {
  constructor(x,y) {
    this.posX = x;
    this.posY = y;
  }
  
  dibujarSprite(x,y, spritesMonedas, frameCorrerYMoneda){
    image(spritesMonedas[frameCorrerYMoneda], x, y, 30, 30);
  }
}
