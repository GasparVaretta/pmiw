let pantallas = 0;
let textos = [];
let imagenes = [];
function setup() {
  createCanvas(640, 480);
}

function preload() {
  textos = loadStrings("textos.txt");
  for (let i = 1; i < 26; i++) {
    imagenes [i] = loadImage("data/img"+i+".png");
  }
}

function draw() {
  background(180);
  if (pantallas > 0) {
    image(imagenes[pantallas], 0, 0);
    dibujarHud()
  }
  fill(255,255,255);
  text("Pantalla " + pantallas, 50, 50);
  if (textos[pantallas -1]) {
    text(textos[pantallas -1], 20, 390, 485, 300);
  } else {
    text("No hay texto para esta pantalla.", 50, 100);
  }
    if (keyIsDown(81)) {
    print("mouseX: " + mouseX, "mouseY: " + mouseY);
  }
}

function mousePressed() {
}

function keyPressed() {
  if (key === ' ') {
    pantallas = 0;
  }
  if (key === 'w') {
    pantallas = 12;
  } else if (key === 's') {
    pantallas = 25;
  }
  if (key === 'r') {
    pantallas += 1;
  } else if (key === 'e') {
    pantallas -= 1;
  }
  if (pantallas < 0) {
    pantallas = 0;
  }
  if (pantallas > 25) {
    pantallas = 25;
  }
}

function mouseReleased() {
  if (mouseX > 520 && mouseX<620 && mouseY >420 && mouseY < 470) {
    pantallas+=1;
    if (pantallas > 25) {
      pantallas = 25;
    }
  }
}

function dibujarHud() {
  fill(0, 150)
    rect(0, 380, 640, 480)
    fill(225, 225, 225)
    rect(520, 420, 100, 50)
}
