// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "SIIII", time: 4 },
  { text: "MUY LINDA TU SONRISA Y TODO", time: 6 },
  { text: "PERO LO QUE ME VUELVE LOCO", time: 10 },
  { text: "ES ESA MUELA QUE TE FALTA", time: 14 },
  { text: "SIIIII", time: 19 },
  { text: "SE VE QUE VAS AL GYM Y TODO", time: 20 },
  { text: "PERO LO QUE ME PONE TONTO", time: 26 },
  { text: "SON LAS LLANTITAS QUE NO VAN A SALIIIIIIR", time: 30 },
  { text: "ROMPEEE,LOS ESTEREOTIPOS QUE PONE LA GENTE", time: 35 },
  { text: "ENORGULLESETE DE SER TAN DIFERENTE", time: 40 },
  { text: "QUE TUS DEFECTOS SON PERFECTOS PARA MI", time: 45 },
  { text: "PA MI,PA MII", time: 48 },
  { text: "Y LO QUE TE MOLESTA A TI", time: 49 },
  { text: "DE TI , DE TII", time: 52 },
  { text: "ES LO PERFECTO PARA MIIIIII", time: 53 },
  { text: "TODOS SABEMOS QUE ES VERDAAAAAAAD", time: 57 },
  { text: "SOLO LO TIENES QUE ACEPTAR", time: 61 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);