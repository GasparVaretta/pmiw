//https://www.youtube.com/watch?v=UKpj-qiZopw
let juego;
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
let frameCorrerYMoneda = 0;
let frameSaltoYCaida = 0;
let frameRata = 0;
let frameLobo = 0;
const MENU = 0;
const JUGANDO = 1;
const GAME_OVER = 2;
const GANASTE = 3;
let estadoActual = MENU;
let monedasQueTieneElJugador= 0;
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
}

function iniciarPartida() {
  juego = new Juego(parallax, backGround, spritesReyCorriendo, 0, 0, 0, spriteReyCayendo, spriteReySaltando, spritesMonedas, spritesRata, spritesLobo, spritesPiedras, 0, perdiste, monedasQueTieneElJugador, sonidoMoneda);
}

function draw() {
  background(0);
  print("puntajeactual aparentemente es: "+monedasQueTieneElJugador);
  if (monedasQueTieneElJugador == 100) {
    estadoActual = GANASTE;
  }
  if (estadoActual === MENU) {
    
    image(imagenInicio, 0, 0, 640, 480, );
    fill(255);
    textAlign(CENTER);
    text("Presiona ENTER para jugar", width/2, height/2);
  } else if (estadoActual === JUGANDO) {
    juego.iniciar();
    if (frameCount % 5 === 0) {
      frameCorrerYMoneda++;
      frameSaltoYCaida++;
      frameRata++;
      frameLobo++;
      if (frameCorrerYMoneda > 7) {
        frameCorrerYMoneda = 0;
      }
      if (frameSaltoYCaida > 1) {
        frameSaltoYCaida = 0;
      }
      if (frameRata > 5) {
        frameRata = 0;
      }
      if (frameLobo > 3) {
        frameLobo = 0;
      }
    }
  } else if (estadoActual === GAME_OVER) {
    musica.stop();
    fill(0, 150);
    rect(0, 0, width, height);
    fill(255);
    textAlign(CENTER);
    image(perdiste, 0, 0, 640, 480, );
    print("perdiste");
    text("Game Over\nPresiona R para reiniciar", width/2, height/2);
  } else if (estadoActual === GANASTE) {
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

function keyPressed() {
  if (estadoActual === MENU && keyCode === ENTER) {
    musica.loop();
    iniciarPartida();
    estadoActual = JUGANDO;
  } else if (estadoActual === JUGANDO) {
    juego.teclaPresionada();
  } else if (estadoActual === GAME_OVER && (key === 'r' || key === 'R')) {
    iniciarPartida();
    monedasQueTieneElJugador = 0;
    estadoActual = MENU;
  } else if (estadoActual === GANASTE && (key === 'r' || key === 'R')) {
    iniciarPartida();
    monedasQueTieneElJugador = 0;
    estadoActual = MENU;
  }
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
