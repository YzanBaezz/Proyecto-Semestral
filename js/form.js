const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    clave: /^.{4,12}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}
const campos = {
    usuario: false,
    clave: false,
    correo: false

}

const validarFormulario = (e) => {
    switch(e.target.name) {
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
        break;
        case "clave":
            validarCampo(expresiones.clave, e.target, 'clave');
            validarclave2();
        break;
        case "clave2":
            validarclave2();
        break;

    
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-check');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#grupo__${campo} .formulario__input-error`) .classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-check');
        document.querySelector(`#grupo__${campo} .formulario__input-error`) .classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

const validarclave2 = () => {
    const inputclave = document.getElementById('clave');
    const inputclave2 = document.getElementById('clave2');

    if(inputclave.value !== inputclave2.value) {
        document.getElementById(`grupo__clave2`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__clave2`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__clave2 i`).classList.add('fa-circle-xmark');
        document.querySelector(`#grupo__clave2 i`).classList.remove('fa-circle-check');
        document.querySelector(`#grupo__clave2 .formulario__input-error`) .classList.add('formulario__input-error-activo');
        campos['clave'] = false;
    } else{
        document.getElementById(`grupo__clave2`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__clave2`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__clave2 i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#grupo__clave2 i`).classList.add('fa-circle-check');
        document.querySelector(`#grupo__clave2 .formulario__input-error`) .classList.remove('formulario__input-error-activo');
        campos['clave'] = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit' , (e) => {
    e.preventDefault();

    const terminos = document.getElementById('terminos');

    if( campos.usuario && campos.correo && campos.clave && terminos.checked){
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 1500);
        
        document.querySelectorAll('.formulario__grupo-correcto').forEach((imagen) => {
            imagen.classList.remove('formulario__grupo-correcto');
        });
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        setTimeout(() => {
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
        }, 2000);
    }
});