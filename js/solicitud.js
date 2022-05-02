const solicitud = document.getElementById('solicitud');
const inputs = document.querySelectorAll('#solicitud input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    nombre: false,
    correo: false,
    telefono: false,
}

const validarSolicitud = (e) => {
    switch (e.target.name){
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
  
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');

        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');

        break;
    }

}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('solicitud__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('solicitud__grupo-correcto');
        document.querySelector(`#grupo__${campo} .solicitud__input-error`).classList.remove('solicitud__input-error-activo');
        campos[campo] = true;

    } else {
        document.getElementById(`grupo__${campo}`).classList.add('solicitud__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('solicitud__grupo-correcto');
        document.querySelector(`#grupo__${campo} .solicitud__input-error`).classList.add('solicitud__input-error-activo');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarSolicitud );
    input.addEventListener('blur', validarSolicitud );

});


solicitud.addEventListener('submit',(e) => {
    e.preventDefault();

    if(campos.nombre && campos.correo && campos.telefono ){
        solicitud.reset();

        document.getElementById('solicitud__mensaje-exito').classList.add('solicitud__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('solicitud__mensaje-exito').classList.remove('solicitud__mensaje-exito-activo');

        }, 1500);
    } else {
        document.getElementById('solicitud__mensaje').classList.add('solicitud__mensaje-activo');
        setTimeout(() => {
            document.getElementById('solicitud__mensaje').classList.remove('solicitud__mensaje-activo');

        }, 2000);
    }


});
    