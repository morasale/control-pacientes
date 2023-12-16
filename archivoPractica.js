const h1 = document.querySelector('h1');
const nombre = document.querySelector('.nombre');
const apellido = document.querySelector('.apellido');
const edad = document.querySelector('.edad');
const cedulaDeIdentidad = document.querySelector('.cedula');
const direccion = document.querySelector('.direccion');
const btnSiguiente = document.querySelector('.siguiente');

function leerInput() {
    console.log("el imput ha cambiado")
}

function escucharEvento() {
    // btnSiguiente.addEventListener('click', btnSiguienteOnClick);
    console.log('hicieron click');
}