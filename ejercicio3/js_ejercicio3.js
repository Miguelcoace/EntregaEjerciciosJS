const boton = document.getElementById("boton");
const texto = document.getElementById("texto");
const lista = document.getElementById("lista");

boton.addEventListener("click", function() {
    const valor = texto.value.trim();
    if(valor === ""){
        alert("El campo está vacio");
    }else{
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = valor;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";

        btnEliminar.addEventListener("click", function () {
            li.remove();
        });

        li.appendChild(span);
        li.appendChild(btnEliminar);
        lista.appendChild(li);

        texto.value = "";
    }
});