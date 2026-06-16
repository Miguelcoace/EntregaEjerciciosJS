const long = document.getElementById("long");
const generar = document.getElementById("generar");
const contraseña = document.getElementById("contraseña");

const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";


generar.addEventListener("click", function() {

    let password = "";
    const longitud = Number(long.value.trim());
    if(longitud < 4) {
        alert("La longitud de la contraseña tiene que ser mayor o igual a 4");
        return;
    }

    for (let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        password += caracteres[randomIndex];
      }

    contraseña.textContent = password;
});