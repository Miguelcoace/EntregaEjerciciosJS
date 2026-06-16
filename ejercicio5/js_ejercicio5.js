const resultado = document.getElementById("res");
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const mult = document.getElementById("multiplicar");
const div = document.getElementById("dividir");


suma.addEventListener("click", function() {

    const n1Value = document.getElementById("num1").value.trim();
    const n2Value = document.getElementById("num2").value.trim();

    if (n1Value === "" || n2Value === "") {
        alert("Debes rellenar ambos campos");
        return;
    }

    const n1 = Number(n1Value);
    const n2 = Number(n2Value);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Debes introducir números válidos");
        return;
    }

    resultado.value = n1 + n2;
});

resta.addEventListener("click", function() {

    const n1Value = document.getElementById("num1").value.trim();
    const n2Value = document.getElementById("num2").value.trim();

    if (n1Value === "" || n2Value === "") {
        alert("Debes rellenar ambos campos");
        return;
    }

    const n1 = Number(n1Value);
    const n2 = Number(n2Value);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Debes introducir números válidos");
        return;
    }

    resultado.value = n1 - n2;
});

mult.addEventListener("click", function() {

    const n1Value = document.getElementById("num1").value.trim();
    const n2Value = document.getElementById("num2").value.trim();

    if (n1Value === "" || n2Value === "") {
        alert("Debes rellenar ambos campos");
        return;
    }

    const n1 = Number(n1Value);
    const n2 = Number(n2Value);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Debes introducir números válidos");
        return;
    }

    resultado.value = n1 * n2;
});

div.addEventListener("click", function() {

    const n1Value = document.getElementById("num1").value.trim();
    const n2Value = document.getElementById("num2").value.trim();

    if (n1Value === "" || n2Value === "") {
        alert("Debes rellenar ambos campos");
        return;
    }

    if (n2Value === "0"){
        alert("No se puede dividir entre 0");
        return;
    }
    const n1 = Number(n1Value);
    const n2 = Number(n2Value);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Debes introducir números válidos");
        return;
    }

    resultado.value = n1 / n2;
});