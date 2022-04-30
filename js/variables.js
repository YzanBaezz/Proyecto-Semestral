var nombre = document.getElementById("nombre");
var clave = document.getElementById("clave");
var correo = document.getElementById("correo");

const form = document.getElementById("form");
var mensaje = document.getElementById("alertas");
//Funcion de flecha
/*
Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, 
pero es limitada y no se puede utilizar en todas las situaciones. Diferencias y limitaciones: 
No tiene sus propios enlaces a this o super y no se debe usar como métodos. 
No tiene argumentos o palabras clave new
*/

/*
CONST: Es una constante la cual NO cambiara su valor en ningún momento en el futuro.

VAR: Es una variable que SI puede cambiar su valor y su scope es local.

LET: Es una variable que también podra cambiar su valor, pero solo vivirá(Funcionara) en el bloque donde fue declarada.
*/


form.addEventListener("submit", e => {
    e.preventDefault();
    let mensajesMostrar = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    mensaje.innerHTML = "";

    if (nombre.value.length < 4 || nombre.value.length > 12) {
        mensajesMostrar += 'El nombre no es valido <br>';
        entrar = true;
    }

    if (nombre.value == "Hola") {
        mensajesMostrar += 'xxx <br>';
        entrar = true;
    }

    if (!regexEmail.test(correo.value)) {
        mensajesMostrar += 'El email no es valido <br>'
        entrar = true
    }

    var letraValidar = nombre.value.charAt(0);
    if(esMayuscula(letraValidar)){
        mensajesMostrar += 'yyy <br>';
        entrar = true;
    }

    if (entrar) {
        mensaje.innerHTML = mensajesMostrar;
    } else {
        mensaje.innerHTML = "Enviado";
    }
});

function esMayuscula(letra) {
    return letra === letra.toUpperCase();
}

/*var miPalabra = "Arbol";
for(var index = 0; index < miPalabra.length; index++)
{
    var letraActual = miPalabra.charAt(index);
    if(esMayuscula(letraActual))
    {
        alert("La letra " + letraActual + " es mayúscula");
    }

    if(esMinuscula(letraActual))
    {
        alert("La letra " + letraActual + " es minúscula");
    }       
}
*/

