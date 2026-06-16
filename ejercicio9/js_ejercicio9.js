const texto = document.getElementById("texto");
const agregar = document.getElementById("agregar");
const lista = document.getElementById("lista");
const limpiar = document.getElementById("limpiar");

// Cargar tareas guardadas o crear un array vacío
let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

// Mostrar las tareas al cargar la página
mostrarTareas();

agregar.addEventListener("click", function () {

    if (texto.value.trim() === "") {
        alert("Introduce una tarea");
        return;
    }

    tareas.push({
        texto: texto.value,
        completada: false
    });

    guardarTareas();
    mostrarTareas();

    texto.value = "";
});

limpiar.addEventListener("click", function () {

    tareas = tareas.filter(tarea => !tarea.completada);

    guardarTareas();
    mostrarTareas();
});

function guardarTareas() {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function mostrarTareas() {

    lista.innerHTML = "";

    tareas.forEach((tarea, indice) => {

        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarea.completada;

        checkbox.addEventListener("change", function () {

            tareas[indice].completada = checkbox.checked;
            guardarTareas();

        });

        li.appendChild(checkbox);
        li.append(" " + tarea.texto);

        lista.appendChild(li);
    });
}