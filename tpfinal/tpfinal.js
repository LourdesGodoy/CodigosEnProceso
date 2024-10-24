let pantalla;
let fuente;
let sonidoGanar, sonidoPerder;
//let imagenes = [];
let imagen_01, imagen_02, imagen_03, imagen_04, imagen_05, imagen_06;
let miVariable = 1;
let dialogos = [
  "Mabel: ¡Dipper debemos unir nuestras voces para crear una perfecta armonia y terminar con estos zombies!",
  "Dipper: No cuentes conmigo, sabes que odio el karaoke.",
  "Mabel: Vamos sin ti no podemos hacerlo Dipper",
  "Dipper: Puedo llamar a los agentes del gobierno y tener otra manera de terminar con los zombies. Todo menos cantar.",
  "Tio Stan: Vamos chico, solo es cantar",
  "Mabel: No tenemos tiempo Dipper, ya estan dentro de la cabaña, ¡Tenemos que cantar!",
];
let indiceDialogo = 0;
let tiempoDialogo = 0;
let dialogosCantar;
let indiceDialogoCantar=0;
let tiempoDialogoCantar=0;

function preload() {
  //for(let i=0; i<7; i++){
  //imagenes [i] = loadImage("data/imagen_01" + i + ".jpg");
  //}
  imagen_01 = loadImage("data/imagen_01.jpg");
  imagen_02 = loadImage("data/imagen_02.jpg");
  imagen_03 = loadImage("data/imagen_03.jpg");
  imagen_04 = loadImage("data/imagen_04.jpg");
  imagen_05 = loadImage("data/imagen_05.jpg");
  imagen_06 = loadImage("data/imagen_06.jpg");
  sonidoPerder = loadSound('data/game-over-39-199830.mp3');
  sonidoGanar = loadSound('data/brass-fanfare-with-timpani-and-winchimes-reverberated-146260.mp3');
  dialogos=loadStrings('data/texto.txt');
  dialogosCantar=loadStrings('data/dialogosCantar.txt');
}

function setup() {
  createCanvas(640, 480);

  pantalla = "jugar";

  fuente = loadFont ('data/Creepster-Regular.ttf');
  textFont(fuente);
  //for (let i=0; i<7; i++){
  //imagenes[i].resize(640, 480);
  //}
  console.log(dialogos);
}

function draw() {
  background(255, 0, 0);

  miVariable = frameCount;

  if (pantalla = "inicio") { //estado 1
    Inicio();
  }
  if (pantalla = "creditos") { //estado 2
    Creditos();
  }
  if (pantalla = "jugar") { //estado 3
    Jugar();
  }
  if (pantalla = "dialogos"){ //estado 4
  Dialogos();
  }
  if (pantalla = "cantar") {}
  if (pantalla = "agentes") {}
  if (pantalla = "resonancia") {}
  if (pantalla = "megafono") {}
}
///esto del sonido despues iria en la pantalla de victoria////
function mousePressed() {
  if (sonidoGanar.isPlaying()) {
    sonidoGanar.stop();
  } else {
    sonidoGanar.play();
  }
}
function keyPressed () { //boton (enter) para comenzar el juego
  if (pantalla == "jugar") {
    if ( keyCode === ENTER) {
      pantalla = "dialogos";
    }
  }
}
