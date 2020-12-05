// Array mapa con 16 posiciones, una por cada celda
var mapa = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// Iniciamos jugador a uno, una vez juegue él, automáticamente le toca al jugador 2 y así sucesivamente
var jugador = 1;

// Imprimimos la tabas con sus celdas 
// Al ser un cuatro en raya usamos un tablero 4x4
function imprimirTabla() {
  document.write(
    '<link rel="stylesheet" href="estilos.css">' +
      "<h1>CUATRO EN RAYA </h1> " +
      "<table>" +
      // fila 1
      "<tr>" +
      '<td id="celda0" onclick = "pincharcelda(0)"></td>' +
      '<td id="celda1" onclick = "pincharcelda(1)"></td>' +
      '<td id="celda2" onclick = "pincharcelda(2)"></td>' +
      '<td id="celda9" onclick = "pincharcelda(9)"></td>' +
      "</tr>" +
      // fila 2
      "<tr>" +
      '<td id="celda3" onclick = "pincharcelda(3)"></td>' +
      '<td id="celda4" onclick = "pincharcelda(4)"></td>' +
      '<td id="celda5" onclick = "pincharcelda(5)"></td>' +
      '<td id="celda10" onclick = "pincharcelda(10)"></td>' +
      "</tr>" +
      // fila 3
      "<tr>" +
      '<td id="celda6" onclick = "pincharcelda(6)"></td>' +
      '<td id="celda7" onclick = "pincharcelda(7)"></td>' +
      '<td id="celda8" onclick = "pincharcelda(8)"></td>' +
      '<td id="celda11" onclick = "pincharcelda(11)"></td>' +
      "</tr>" +
      // fila 4
      "<tr>" +
      '<td id="celda12" onclick = "pincharcelda(12)"></td>' +
      '<td id="celda13" onclick = "pincharcelda(13)"></td>' +
      '<td id="celda14" onclick = "pincharcelda(14)"></td>' +
      '<td id="celda15" onclick = "pincharcelda(15)"></td>' +
      "</tr>" +
      "</table>" +
      //boton de reiniciar
      '<input id="reinicio" type="submit" value="Reiniciar" onclick="location.reload()">'
  );
}
//Funcion pintar la celda segun el jugador
function pintar() {
  for (i = 0; i < 16; i++) {
    //SI es igual a 0 es que nadie la ha pinchado aún
    if (mapa[i] == 0) {
      document.getElementById("celda" + i).style.backgroundColor = "white";
    }
    //SI es igual a 1 es que la ha pinchado el jugador 1 por lo que coloreamos de color rojo
    if (mapa[i] == 1) {
      document.getElementById("celda" + i).style.backgroundColor = "#d00000";
    }
    //SI es igual a 2 es que la ha pinchado el jugador 2 por lo que coloreamos de color azul
    if (mapa[i] == 2) {
      document.getElementById("celda" + i).style.backgroundColor = "#023e8a";
    }
  }
}

//Pinta la celda donde pincha el usuario
function pincharcelda(celda) {
  // Si la celda esta vacía celda=0
  if (mapa[celda] == 0) {
    //Si es el jugador 1 y pincha celda se colorea de Rojo
    if (jugador == 1) {
      mapa[celda] = 1;
      //Cuando pinche el jugador 1 automáticamente cambiamos al 2
      jugador = 2;
    } else {
      //Cuando pinche el jugador 2 automáticamente cambiamos al 1
      mapa[celda] = 2;
      jugador = 1;
    }
  } else {
    //CASO CELDA !=0 ES QUE ESTA COLOREADA Y NO PODEMOS SOBREESCRIBIR ESE COLOR
    alert("No puedes pulsar sobre una celda coloreada");
  }
  // Una vez pincha un jugador usamos la función pintar
  pintar();

  var campeon = ganador();
  // EN caso de campeon = 1 gana jugador 1
  // EN caso de campeon = 2 gana jugador 2
  // EN caso de campeon = 3 ninguno de los dos gana 
  switch (campeon) {
    case 0:
      break;
    case 1:
      alert("Ganó el rojo!");
      // Imprimimos felicitacion y boton para reanudar
      document.write(
        '<link rel="stylesheet" href="estilos.css">' +
          "<h1>Felicidades Rojo!</h1>" +
          "<input type='submit' onclick='location.reload();' class='bg-primary' value='Volver al tablero'>"
      );
      break;
    case 2:
      alert("Ganó el azul!");
      // Imprimimos felicitacion y boton para reanudar
      document.write(
        '<link rel="stylesheet" href="estilos.css">' +
          "<h1>Felicidades Azul!</h1>" +
          "<input type='submit' onclick='location.reload();' class='bg-primary' value='Volver al tablero'>"
      );
      break;
    case 3:
      alert("Empate");
      // Imprimimos felicitacion y boton para reanudar
      document.write(
        '<link rel="stylesheet" href="estilos.css">' +
          "<h1>LOS DOS SOIS GRANDES JUGADORES!</h1>" +
          "<input type='submit' onclick='location.reload();' class='bg-primary' value='Volver al tablero'>"
      );
      break;
  }
}

function ganador() {
  //Controlador de espacios
  var numEspacios = 0;
  for (i = 0; i < 16; i++) {
    if (mapa[i] == 0) numEspacios++;
  }

  // combinaciones filas
  //Primera fila
  if (
    mapa[0] == mapa[1] &&
    mapa[1] == mapa[2] &&
    mapa[2] == mapa[9] &&
    mapa[0] != 0
  ) {
    return mapa[0];
  }

  //Segunda fila
  if (
    mapa[3] == mapa[4] &&
    mapa[4] == mapa[5] &&
    mapa[5] == mapa[10] &&
    mapa[3] != 0
  ) {
    return mapa[3];
  }

  //Tercera fila
  if (
    mapa[6] == mapa[7] &&
    mapa[7] == mapa[8] &&
    mapa[8] == mapa[11] &&
    mapa[6] != 0
  ) {
    return mapa[6];
  }

  // Cuarta fila
  if (
    mapa[12] == mapa[13] &&
    mapa[13] == mapa[14] &&
    mapa[14] == mapa[15] &&
    mapa[12] != 0
  ) {
    return mapa[12];
  }

  //Combinaciones Columnas
  //Primera columna
  if (
    mapa[0] == mapa[3] &&
    mapa[3] == mapa[6] &&
    mapa[6] == mapa[12] &&
    mapa[0] != 0
  ) {
    return mapa[0];
  }

  //Segunda columna
  if (
    mapa[1] == mapa[4] &&
    mapa[4] == mapa[7] &&
    mapa[7] == mapa[13] &&
    mapa[1] != 0
  ) {
    return mapa[1];
  }
  //Tercera columna

  if (
    mapa[2] == mapa[5] &&
    mapa[5] == mapa[8] &&
    mapa[8] == mapa[14] &&
    mapa[2] != 0
  ) {
    return mapa[2];
  }

  //Cuarta columna
  if (
    mapa[9] == mapa[10] &&
    mapa[10] == mapa[11] &&
    mapa[11] == mapa[15] &&
    mapa[9] != 0
  ) {
    return mapa[9];
  }

  // Combinaciones diagonales
  // Cobinacion izq a drch
  if (
    mapa[0] == mapa[4] &&
    mapa[4] == mapa[8] &&
    mapa[8] == mapa[15] &&
    mapa[0] != 0
  ) {
    return mapa[0];
  }
  // Cobinacion drch a izq
  if (
    mapa[9] == mapa[5] &&
    mapa[5] == mapa[7] &&
    mapa[7] == mapa[12] &&
    mapa[9] != 0
  ) {
    return mapa[9];
  }

  if (numEspacios > 0) {
    return 0;
  } else {
    return 3;
  }
}


// genera la tabla
imprimirTabla();
