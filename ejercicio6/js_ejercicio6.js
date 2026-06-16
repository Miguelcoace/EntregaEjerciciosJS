const temp = document.getElementById("temporizador");
const inicio = document.getElementById("Inicio");
const pausa = document.getElementById("Pausa");
const reinicio = document.getElementById("Reinicio");

let segundos = 0;
    let intervalo = null;
    let corriendo = false;

inicio.addEventListener("click", function() {
     if (corriendo) return;

      intervalo = setInterval(actualizar, 1000);
      corriendo = true;
});

pausa.addEventListener("click", function() {
    clearInterval(intervalo);
    intervalo = null;
    corriendo = false;
});

reinicio.addEventListener("click", function() {
    clearInterval(intervalo);
      corriendo = false;
      segundos = 0;
      temp.textContent = "00:00:00";
});


function formatearTiempo(totalSegundos) {
      const horas = Math.floor(totalSegundos / 3600);
      const minutos = Math.floor((totalSegundos % 3600) / 60);
      const segundos = totalSegundos % 60;

      return (
        String(horas).padStart(2, "0") + ":" +
        String(minutos).padStart(2, "0") + ":" +
        String(segundos).padStart(2, "0")
      );
}

function actualizar() {
      segundos++;
      temp.textContent = formatearTiempo(segundos);
}