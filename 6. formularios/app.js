// !Expresiones Regulares
// https://bluuweb.github.io/desarrollo-web-bluuweb/11-08-js-form/#expresiones-regulares

// notación de objeto
const regExpObjeto = new RegExp("aries", "i")

// notación literal
const regExpLiteral1 = /aries/i

// solo numeros
const validarNumeros = /^\d+$/gi;
// solo letras con tildes
const validarLetras = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
// validar correo  
const validarEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;


// * Metodo test() ejecuta la búsqueda de una cadena especificada. Devuelve true o false.
console.log(validarEmail.test("aries@gmail.com"));



// !Practica Formulario
const formulario = document.getElementById("formulario");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();

    if(!validarLetras.test(userName.value)){
        console.log("El nombre no es válido");
        return;
    }

    if(!validarEmail.test(userEmail.value)){
        console.log("Correo no valido");
        return;
    }

});


