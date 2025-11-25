//https://www.youtube.com/watch?v=ByrsJ61iIhA
let gameManager;
let parallax;
let backGround;
let perdiste;
let imagenInicio;
let imagenGanaste;
let spritesRata = [];
let spritesLobo = [];
let spritesPiedras = [];
let spriteReyCayendo = [];
let spriteReySaltando = [];
let spritesReyCorriendo = [];
let spritesMonedas = [];
let musica;
let sonidoMoneda;

function preload() {
  musica = loadSound("data/zelda.mp3");
  sonidoMoneda = loadSound("data/sound3.mp3");
  parallax = loadImage("data/Parallax.png");
  backGround = loadImage("data/Background.png");
  perdiste =loadImage("data/perdiste.png");
  imagenInicio = loadImage("data/pantallaInicio.png");
  imagenGanaste = loadImage("data/pantallaGanaste.png");
  for (let i = 0; i <= 7; i++) {
    spritesReyCorriendo[i] = loadImage("data/spritesReyCorriendo/kingwalk" + i + ".png");
    spritesMonedas[i] = loadImage("data/moneda/coin" + i + ".png");
  }
  for (let i = 0; i <= 1; i++) {
    spriteReySaltando[i] = loadImage("data/reySaltando/jump" + i + ".png");
    spriteReyCayendo[i] = loadImage("data/reyCayendo/fall" + i + ".png");
  }
  for (let i = 0; i <= 5; i++) {
    spritesRata[i] = loadImage("data/rata/ratwalking" + i + ".png");
  }
  for (let i = 0; i <= 3; i++) {
    spritesLobo[i] = loadImage("data/lobo/lobo" + i + ".png");
  }
  for (let i = 0; i <= 4; i++) {
    spritesPiedras[i] = loadImage("data/piedras/piedra" + i + ".png");
  }
}

function setup() {
  createCanvas(640, 480);
  musica.setVolume(0.5);
  gameManager = new GameManager();
}

function draw() {
  background(0);
  gameManager.maquinaDeEstados();
}

function keyPressed() {
  gameManager.teclaPresionada();
}







/*
.Juego
 -constructor()
 -jugador---Jugador
 -obstaculos---obstaculo
 -moneda---Moneda
 -dibujar()
 -dibujar jugador
 -dibujar hud
 -dibujar obstaculos
 -iniciar()
 -reiniciar()
 .Jugador
 -constructor()
 -posX
 -posY
 -sprite del rey
 -dibujar()
 -dibujar sprite del rey
 -salto()
 .Obstaculo
 -constructor()
 -posX
 -posY
 -dibujar()
 -movimientoX
 -colision
 .Moneda
 -constructor()
 -posX
 -posY
 -dibujar()
 -movimientoX
 -colision
 .Hud
 
 */
