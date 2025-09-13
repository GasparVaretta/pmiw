//video explicativo: https://www.youtube.com/watch?v=MHxj6KElPLU
let obra;
let colorAmarillo;
let colorGris;
let obraColorOriginal = false;

function preload(){

  obra = loadImage('data/obra.png');

}

function setup() {
  
  createCanvas(800,400);
  background(245, 242, 243);
  colorAmarillo = color(255, 191, 0);
  colorGris = color(33, 36, 38);
}


function draw() {

image(obra,0,0,400,400);

print("mouseX: "+mouseX, "mouseY: "+mouseY);


if (obraColorOriginal) {
    colorAmarillo = color(33, 36, 38);
    colorGris = color(255, 191, 0);
  } else {
    colorAmarillo = color(255, 191, 0);
    colorGris = color(33, 36, 38);
  }

 dibujarCuadrados(2);
  BarrasCentrales(26,2);
}

function keyPressed() {
  if (key == 'd') {
    obraColorOriginal = true;
  }
}

function mousePressed() {
  if (mouseX >=0 && mouseX <=400 && mouseY >=0 && mouseY <= 400) {
    obraColorOriginal = false;
  }
}
