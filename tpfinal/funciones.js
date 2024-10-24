function Inicio() {
  background(0);
  //(imagenes[1], 0, 0, 640, 480);
  image (imagen_01, 0, 0, 640, 480);
  textFont(fuente);
  textSize(70);
  fill(119, 167, 65);
  text("KARAOKE ZOMBIE", 100, 120);
  fill(38, 51, 70);
  rect(90, 400, 120, 50, 40);
  rect(430, 400, 120, 50, 40);
  stroke(0);
  fill(255);
  textSize(20);
  text("Jugar", 125, 430);
  text("Creditos", 457, 430);
}

function Creditos() {
  background(0);
  textSize(25);
  fill(255);
  text("         Creadoras del juego: \n Godoy Lourdes y Sofia Gramajo \n  \n          Creador de la serie: \n               Alex Hirsch \n  \n       Trabajo Practico Final \nProfesor: Matias Jauregui Lorda\n             PMIW - Comision 2 \n                     \n                      2024 ©", width / 4, height / 4);
  fill(38, 51, 70);
  rect(30, 30, 150, 50, 40);
  fill(255);
  textSize(20);
  text("volver al inicio", 45, 60);
}

function Jugar() {
  //(imagenes[2], 0, 0, 640, 480);
  image(imagen_02, 0, 0, 640, 480);
  textSize(20);
  text("Dipper despierta a los zombies en Gravity Falls mientras Mabel \n está en una fiesta de karaoke. Los gemelos descubren que solo \n las perfectas armonias pueden derrotar a los zombies, y Mabel \n no tiene mejor idea que comenzar el karaoke, algo que Dipper \n                 odia y se niega a hacer. ¿Que hará Dipper? \n               ¿Se unira al karaoke de Mabel y el Tio Stan? \n                    ¿Podran terminar con los zombies?\n                          \n¡Ayuda a los gemelos misterio, y al Tio Stan, a terminar con esto \n                   y poder seguir con su fiesta de karaoke!", 55, 500-miVariable*1);
  fill(38, 51, 70);
  rect(30, 30, 150, 50, 40);
  fill(255);
  textSize(20);
  text("volver al inicio", 45, 60);
  if ( frameCount/60 >= 6 )
    text("presiona la tecla enter para comenzar", 150, 450);
}
function Dialogos() {
  image(imagen_03, 0, 0, 640, 480);
  // Muestra el dialogo
  fill(255);
  text(dialogos[indiceDialogo], 70, 250);
  // Avanza al siguiente texto después de 3 segundos
  tiempoDialogo++;
  if (tiempoDialogo >= 120) {
    indiceDialogo++;
    tiempoDialogo = 0;
  }
  // Muestra las opciones después del último texto
  if (indiceDialogo >= dialogos.length) {
    stroke(255);
    fill(247, 107, 229); //color rosa
    text("Cantar con Mabel y el Tio Stan", 65, 430);
    text("Llamar a los agentes", 430, 430);
  }
}
