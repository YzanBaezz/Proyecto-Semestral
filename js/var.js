$(document).ready(function () {
    $("#form").submit(function (e) {
        e.preventDefault();
        var nombre = $("#nombre").val();
        var clave = $("#clave").val();
        var correo = $("#correo").val();
        var mensaje = "";

        let entrar = false;
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
        

        if (nombre.trim().length < 4 || nombre.trim().length > 12) {
            mensaje += 'El nombre no es valido <br>';
            entrar = true;
        }

        if (nombre == "Hola") {
            mensaje += 'xxx <br>';
            entrar = true;
        }

        if (!regexEmail.test(correo)) {
            mensaje += 'El email no es valido <br>'
            entrar = true
        }

        var letraValidar = nombre.charAt(0);
        if (esMayuscula(letraValidar)) {
            mensaje += 'yyy <br>';
            entrar = true;
        }

        if (entrar) {
            $("#alertas").html(mensaje);
        } else {
            $("#alertas").html("Enviado");
        }
    });

    function esMayuscula(letra) {
        return letra === letra.toUpperCase();
    }
})