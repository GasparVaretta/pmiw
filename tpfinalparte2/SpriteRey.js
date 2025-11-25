class SpriteRey {
  constructor() {
  }

  dibujarSprite(posXRey, posYRey, spritesReyCorriendo,spriteReyCayendo, spriteReySaltando, frameCorrerYMoneda, frameSaltoYCaida, saltando, cayendo) {
    if (saltando == false && cayendo == false) {
      image(spritesReyCorriendo[frameCorrerYMoneda], posXRey-110, posYRey-200, 250, 250);
    } else if( cayendo == true){
      image(spriteReyCayendo[frameSaltoYCaida], posXRey-110, posYRey-200, 250, 250)
    } else if(saltando == true){
      image(spriteReySaltando[frameSaltoYCaida], posXRey-110, posYRey-200, 250, 250);
    }
  }

  teclaPresionada() {
  }
}
