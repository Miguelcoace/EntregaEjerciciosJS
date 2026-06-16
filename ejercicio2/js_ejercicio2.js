const boton = document.getElementById("boton");
const texto = document.getElementById("texto");
let contador = 0;

boton.addEventListener("click", function(){
    contador++;
    texto.textContent = "Clic: "+contador;
});