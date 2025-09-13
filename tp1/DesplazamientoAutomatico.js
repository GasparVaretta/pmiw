function desplazamientoAutomatico(centroObraPosX,centroObraPosY){
  
   let distancia = dist(centroObraPosX, centroObraPosY, mouseX, mouseY);
  let movimiento = map(distancia, 0, 100, 20, 0);
  if (movimiento <0) {
    movimiento=0;
  }
 return movimiento;
 }
