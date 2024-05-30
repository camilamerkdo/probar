/*
//capas
let CapamanchaG;
let CapamanchaNaG;
let Capalineas;
//manchas
let manchaG=[];
let manchaN = [];
let lineas = [];
//conteo  de  imagenes
let contadorManchasG = 0;
let contadorManchasN = 0;
let contadorLineas = 0;
//cantidad    de  imagenes
let cant=5;

function preload(){
  //carga de  imagenes
  for(let   i=0;  i<cant; i++){
  manchaG[i]=loadImage("data/manchasg"+(i+1)+".png");
  manchaN[i] = loadImage("data/manchasn" + (i + 1) + ".png");
  lineas[i] = loadImage("data/Linea" + (i + 1) + ".png");
  }
}
function setup() {
  //userStartAudio();   iniciar el  audio
  createCanvas(550, 800);
  //CAPAS
  CapamanchaG = createGraphics(550, 800);
  CapamanchaN = createGraphics(550, 800);
  Capalineas = createGraphics(550, 800);
}

function draw() {
  background(255);


  // capa mancha NEGRA
  for (let i = 0; i < contadorManchasN; i++) {
    if (mouseY > 0 && mouseY < 266 && cant <= 5) { 
       x = random(width); //posicion
        y = random(height); 
        w = random(150, 250); //ancho
       h = random(150, 250);//largo
        CapamanchaN.image(manchaN, x, y, w, h);
      contadorManchasN += 1;
    }
  }

 
  // capa Lineas

  for (let i = 0; i < contadorLineas; i++) {
    if (mouseY > 532 && mouseY < 800 && cant <= 5) { 
       x = random(width); //posicion
       y = random(height); 
       w = random(5, 50); //ancho
       h = random(5, 50); //largo
      Capalineas.image(lineas[i], x, y, w, h);
      contadorLineas += 1;
    }
  }

  // capa mancha gris


  for (let i = 0; i < contadorManchasG; i++) {
    if (mouseY > 266  &&  mouseY <532 && cant <= 5) {
       x = random(width); //posicion
       y = random(height); 
       w = random(250, 450); //ancho
       h = random(250, 450);//largo
      CapamanchaG.image(manchaG[i], x, y, w, h);
      contadorManchasG += 1;
    }
  }
}
*/


//capas
let CapamanchaG;
let CapamanchaNaG;
let Capalineas;
//manchas
let manchaG = [];
let manchaN = [];
let lineas = [];
//conteo  de  imagenes
let contadorManchasG = 0;
let contadorManchasN = 0;
let contadorLineas = 0;
//cantidad    de  imagenes
let cant = 5;

function preload() {
  //carga de  imagenes
  for (let i = 0; i < cant; i++) {
    manchaG[i] = loadImage("data/manchasg" + (i + 1) + ".png");
    manchaN[i] = loadImage("data/manchasn" + (i + 1) + ".png");
    lineas[i] = loadImage("data/Linea" + (i + 1) + ".png");
  }
}
function setup() {
  //userStartAudio();   iniciar el  audio
  createCanvas(550, 800);
  //CAPAS
  CapamanchaG = createGraphics(550, 800);
  CapamanchaNaG = createGraphics(550, 800);
  Capalineas = createGraphics(550, 800);
}

function draw() {
  background(255);


  // capa mancha NEGRA
  for (let i = 0; i < contadorManchasN; i++) {
    if (mouseY > 0 && mouseY < 266 && cant <= 5) {
      x = random(width); //posicion
      y = random(height);
      w = random(150, 250); //ancho
      h = random(150, 250);//largo
      CapamanchaNaG.image(manchaN, x, y, w, h);
      contadorManchasN += 1;
    }
  }


  // capa Lineas

  for (let i = 0; i < contadorLineas; i++) {
    if (mouseY > 532 && mouseY < 800 && cant <= 5) {
      x = random(width); //posicion
      y = random(height);
      w = random(5, 50); //ancho
      h = random(5, 50); //largo
      Capalineas.image(lineas[i], x, y, w, h);
      contadorLineas += 1;
    }
  }

  // capa mancha gris


  for (let i = 0; i < contadorManchasG; i++) {
    if (mouseY > 266 && mouseY < 532 && cant <= 5) {
      x = random(width); //posicion
      y = random(height);
      w = random(250, 450); //ancho
      h = random(250, 450);//largo
      CapamanchaG.image(manchaG[i], x, y, w, h);
      contadorManchasG += 1;
    }
  }
}





