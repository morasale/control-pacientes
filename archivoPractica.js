const h1 = document.querySelector('h1');
const nombre = document.querySelector('#nombres');
const apellido = document.querySelector('#apellidos');
const edad = document.querySelector('#edad');
const cedulaDeIdentidad = document.querySelector('#cedula');
const direccion = document.querySelector('#direccion');
const btnSiguiente = document.querySelector('#siguiente');
const datosCompletos = document.querySelector('#datosCompletos');

function escucharEvento() {
    // console.log('hicieron click');
    const sumaImputs = 'Nombre y apellidos del paciente ' + nombre.value + ' ' + apellido.value + ', edad ' + edad.value + ', cedula de identidad ' + cedulaDeIdentidad.value + ', direccion ' + direccion.value
    datosCompletos.innerText = 'resultados: ' + sumaImputs;
  
}
