function dibujarCuadrados(cantidadCuadrados) {
  let cuadradoPosX = 464;
  let cuadradoPosY = 83;
  let longitudCuadrado = 137;
  let alturaCuadrado = 118;

  for (let i = 0; i < cantidadCuadrados; i = i + 1) {
    for (let j = 0; j < cantidadCuadrados; j = j + 1) {
      let x = cuadradoPosX + i * longitudCuadrado;
      let y = cuadradoPosY + j * alturaCuadrado;

      // alternancia par/impar
      if ((i + j) % 2 === 0) {
        fill(colorAmarillo);
      } else {
        fill(colorGris);
      }

      noStroke();
      rect(x, y, longitudCuadrado, alturaCuadrado);
    }
  }
}
