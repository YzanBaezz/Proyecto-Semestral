const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');


const expresiones = {
    nombre: /^[a-zA-Z0-9\_\-]{4,16}$/,
    clave: /^.{4,12}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

form.addEventListener('submit' , (e) => {
    e.preventDefault()

})