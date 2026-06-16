const texto = document.getElementById("texto");
const caract = document.getElementById("caracteres");
const pal = document.getElementById("palabras");
let contCar = 0;
let contPal = 0;

texto.addEventListener("keyup", function(){
    contCar++;
    caract.value = String(contCar);

    const listaPalabras = texto.value
        .trim()
        .split(/\s+/)
        .filter(palabra => palabra !== "");

    pal.value = texto.value.trim() === "" ? 0 : listaPalabras.length;
});