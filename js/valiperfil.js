const editarperfil = document.getElementById('editarperfil');
const inputs = document.querySelectorAll('#editarperfil input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{9}$/ // 9 digitos
}


const campos = {
    nombre: false,
    usuario: false,
    password: false,
    correo: false,
    telefono: false,
}

const validarEditarperfil = (e) => {
    switch (e.target.name){
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
  
        break;
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
  
        break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            validarPassword2();
  
        break;
        case "password2":
            validarPassword2();

  
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
        document.getElementById(`grupo__${campo}`).classList.remove('editperfil__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('editperfil__grupo-correcto');
        document.querySelector(`#grupo__${campo} .editperfil__input-error`).classList.remove('editperfil__input-error-activo');
        campos[campo] = true;

    } else {
        document.getElementById(`grupo__${campo}`).classList.add('editperfil__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('editperfil__grupo-correcto');
        document.querySelector(`#grupo__${campo} .editperfil__input-error`).classList.add('editperfil__input-error-activo');
        campos[campo] = false;
    }
}

const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');

    if(inputPassword1.value !== inputPassword2.value){
        document.getElementById(`grupo__password2`).classList.add('editperfil__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.remove('editperfil__grupo-correcto');
        document.querySelector(`#grupo__password2 .editperfil__input-error`).classList.add('editperfil__input-error-activo');
    } else {
        document.getElementById(`grupo__password2`).classList.remove('editperfil__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.add('editperfil__grupo-correcto');
        document.querySelector(`#grupo__password2 .editperfil__input-error`).classList.remove('editperfil__input-error-activo');

    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarEditarperfil );
    input.addEventListener('blur', validarEditarperfil );

});


solicitud.addEventListener('submit',(e) => {
    e.preventDefault();

    if(campos.nombre && campos.usuario && campos.password && campos.correo && campos.telefono ){
        editarperfil.reset();

        document.getElementById('editperfil__mensaje-exito').classList.add('editperfil__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('editperfil__mensaje-exito').classList.remove('editperfil__mensaje-exito-activo');

        }, 1500);
    } else {
        document.getElementById('editperfil_mensaje').classList.add('editperfil_mensaje-activo');
        setTimeout(() => {
            document.getElementById('editperfil_mensaje').classList.remove('editperfil_mensaje-activo');

        }, 2000);
    }


});
