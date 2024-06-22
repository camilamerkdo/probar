let CapamanchaG;
let CapamanchaN;
let Capalineas;
let Capafondo;
let fondo;
let cant = 5;
let manchaG = [];
let manchaN = [];
let lineas = [];
let tiempoDentroCapa = 0;
let tiempoAnterior = 0;
let tiempoRotacion = 2000; // 2 segundos
let capaActual = "";
let limiteImagenes = 5;
let manchasG = [];
let manchasN = [];
let manchasLineas = [];

function preload() {
  fondo = loadImage("data/Lienzo2.png"); // Cargar la imagen de fondo

  for (let i = 0; i < cant; i++) {
    let dmanchaG = "data/manchasg" + (i + 1) + ".png";
    let dmanchaN = "data/manchasn" + (i + 1) + ".png";
    let dlineas = "data/Linea" + (i + 1) + ".png";

    manchaG[i] = loadImage(dmanchaG);
    manchaN[i] = loadImage(dmanchaN);
    lineas[i] = loadImage(dlineas);
  }
}

function setup() {
  createCanvas(300, 550);
  Capafondo = createGraphics(300, 550);
  Capafondo.image(fondo, 0, 0, 300, 550);

  CapamanchaG = createGraphics(500, 550);
  CapamanchaN = createGraphics(500, 550);
  Capalineas = createGraphics(500, 550);
}

function draw() {
  background(200);
  image(Capafondo, 0, 0); // Dibujar la capa de fondo

  let tiempoTranscurrido = millis() - tiempoAnterior;
  tiempoAnterior = millis();

  actualizarCapa(tiempoTranscurrido);

  // Manejar las manchas para cada capa
  if (capaActual === "N") {
    manejarManchas(manchasN, ManchaN, manchaN, 150, 250); // Ultimos 2 dan tamaño
  } else if (capaActual === "L") {
    manejarManchas(manchasLineas, Linea, lineas, 100, 250); // Ultimos 2 dan tamaño
  } else if (capaActual === "G") {
    manejarManchas(manchasG, ManchaG, manchaG, 250, 450); // Ultimos 2 dan tamaño
  }

  // Dibujar las manchas en sus capas
  dibujarManchas(CapamanchaN, manchasN);
  dibujarManchas(CapamanchaG, manchasG);
  dibujarManchas(Capalineas, manchasLineas);

  // Dibujar las capas en el canvas principal
  image(CapamanchaG, 0, 0);
  image(CapamanchaN, 0, 0);
  image(Capalineas, 0, 0);
}

function actualizarCapa(tiempoTranscurrido) {
  let nuevaCapa = "";

  if (mouseY > 0 && mouseY < 183) {
    nuevaCapa = "N";
  } else if (mouseY > 366 && mouseY < 550) {
    nuevaCapa = "L";
  } else if (mouseY > 183 && mouseY < 366) {
    nuevaCapa = "G";
  }

  if (nuevaCapa !== capaActual) {
    if (capaActual !== "") {
      // Detener la rotación de la mancha en la capa anterior
      detenerRotacionMancha(capaActual);
    }
    capaActual = nuevaCapa;
    tiempoDentroCapa = 0; // Toma el tiempo al cambiar de capa
  } else {
    tiempoDentroCapa += tiempoTranscurrido;
  }
}

function detenerRotacionMancha(capa) {
  if (capa === "N" && manchasN.length > 0) {
    manchasN[manchasN.length - 1].stopRotating();
  } else if (capa === "L" && manchasLineas.length > 0) {
    manchasLineas[manchasLineas.length - 1].stopRotating();
  } else if (capa === "G" && manchasG.length > 0) {
    manchasG[manchasG.length - 1].stopRotating();
  }
}

function manejarManchas(manchas, ClaseMancha, imagenes, minSize, maxSize) {
  if (manchas.length === limiteImagenes) {
    // Iniciar el desvanecimiento de la mancha más antigua al alcanzar el límite
    manchas[0].desvanecer();
    if (manchas[0].opacidad <= 0) {
      manchas.shift(); // Elimina la mancha más antigua cuando sea completamente transparente
    }
  }

  if (manchas.length < limiteImagenes) { // Verifica que no haya mas de 5 manchas
    if (tiempoDentroCapa >= tiempoRotacion) {
      if (manchas.length > 0) {
        manchas[manchas.length - 1].startRotating();
      }
    }

    if (manchas.length === 0 || tiempoDentroCapa === 0) {
      let i = floor(random(cant));
      let w = random(minSize, maxSize);
      let h = random(minSize, maxSize);
      let x = random(0, width); // Posición aleatoria sin límites
      let y = random(0, height); // Posición aleatoria sin límites
      let velocidad = random(0.01, 0.05); // Velocidad aleatoria
      let nuevaMancha = new ClaseMancha(imagenes[i], x, y, w, h, velocidad);
      nuevaMancha.rotacionInicial = random(TWO_PI); // Rotacón inicial aleatoria
      nuevaMancha.apareciendo = true; // Apareciendo
      nuevaMancha.opacidad = 0; // Empezar con opacidad 0
      manchas.push(nuevaMancha);
    }
  }
}

function dibujarManchas(capa, manchas) {
  capa.clear();
  for (let mancha of manchas) {
    mancha.dibujar(capa);
  }
}
