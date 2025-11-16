class SpriteObstaculo {
  constructor(x, y) {
    this.posX = x;
    this.posY = y;
  }

  dibujarSprite(x, y, frameRata,frameLobo, spritesRata, spritesLobo, spritesPiedras, spriteAleatoreo) {
    if (spriteAleatoreo == 1) {
      image(spritesRata[frameRata], x, y-2, 50, 40);
    } else if (spriteAleatoreo == 2) {
      image(spritesLobo[frameLobo], x, y-60, 150, 130);
    } else if (spriteAleatoreo == 3) {
      image(spritesPiedras[spriteAleatoreo], x, y-27, 70, 70);
    }else if(spriteAleatoreo == 4){
      image(spritesPiedras[4], x, y-27, 70, 70);
    }
  }
}
