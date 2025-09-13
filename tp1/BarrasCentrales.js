function BarrasCentrales(cantidadBarras ,cantidadFilas) {
  
  let barrasPosX =509;
  let barrasPosY = 120;
  let longitudBarras = 7;
  let alturaBarras = 81;
  
 let desplazamiento = desplazamientoAutomatico(600,201);
 print("distancia entre mouse y centro de la obra: "+ desplazamiento);
  
  for (let i= 0; i < cantidadBarras; i = i + 1) {     //mi contador
    for (let j = 0; j < cantidadFilas; j = j + 1) { 
  
      let x = barrasPosX + i * longitudBarras;
      let y = barrasPosY + j * alturaBarras;
    
      if (j == 0) {
        y = y - desplazamiento ;
      } else {
        y = y + desplazamiento;
      }
      if (((i ) + (j )) % 2 == 0) {    //si la sumatoria de las coordenadas, me devuelve 0        
        fill(colorGris);
      } else {
        fill(colorAmarillo);
      }
      
     
      rect(x,y,longitudBarras,alturaBarras );
      
  
  }
}
}
    
