const texto = document.getElementById("texto");
const lista = document.getElementById("lista").querySelectorAll("li");

texto.addEventListener("keyup", function() {

    const valor = texto.value.trim().toUpperCase();
    
    lista.forEach(li => {
        const elemento = li.textContent.toUpperCase();
        if(!elemento.startsWith(valor)) {
            li.style.display = "none";
        }else{
            li.style.display = "list-item";
        }
    })
});