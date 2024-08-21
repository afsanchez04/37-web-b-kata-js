
//Ejercicio captura de variables

/* const sectionIntro = document.getElementById("intro")
const titulo = document.getElementsByTagName('h1')
const parrafos = document.getElementsByTagName('p')
const botones = document.getElementsByClassName('btn')
const aviso = document.querySelector('#aviso')
const miParrafo = document.querySelector('.parrafo')
const btnApp = document.querySelectorAll('.btn')


const listaBotones = [...botones]

console.log(sectionIntro)
console.log(titulo[0])
console.log(parrafos[1])
console.log(botones)
console.log(aviso)
console.log(miParrafo)
console.log(btnApp)

listaBotones.forEach(element => {
    element.style.backgroundColor = "orange"
}); 

function consultarLibros(libro){
    alert(`Buscando libro "${libro}"... 🤖`)
    titulo[0].innerText = `El libro "${libro}" no se encontró 😔`
} */

//Ejercicio contador
//Programar un contador que incremente hasta 20 y que no sea inferior a 0

/* const contadorElement = document.getElementById('contador');
const btnMas = document.getElementById('btnMas');
const btnMenos = document.getElementById('btnMenos');
let contador = 0;

btnMas.addEventListener('click', () => {
    if (contador < 20) {
        contador++;
        contadorElement.textContent = contador;
    }
});

btnMenos.addEventListener('click', () => {
    if (contador > 0) {
        contador--;
        contadorElement.textContent = contador;
    }
}); */


//Ejercicio animación pelota
//Pelota cambia de color y se mueve en horizontal a la derecha

//1. Captura de variables
const cantPixeles = document.querySelector("#pixeles")
const listaColores = document.querySelector("#listaColores")
const formulario = document.querySelector("#formulario")
const pelota = document.querySelector(".pelota")

//2. Creación de funciones
function moverPelota(e){
    e.preventDefault()
    pelota.style.backgroundColor = listaColores.value
    pelota.style.marginLeft = cantPixeles.value + 'px'
    pelota.style.transitionDuration = '.3s'
    console.log('Ejecutando...')
}

function desaparecer (){
    pelota.style.display = "none"
}

//3. Llamado del evento
formulario.addEventListener('submit',moverPelota)
pelota.addEventListener("click",desaparecer)


//Validación usuario

var cuentas = [
    { nombre: 'Mali', saldo: 200, pass: 12345 },
    { nombre: 'Gera', saldo: 290, pass: 12345 },
    { nombre: 'Maui', saldo: 67, pass: 12345 }
];

//1. Variables
const formInicio = document.querySelector('#formInicio')
const userName = document.querySelector('#user')
const passName = document.querySelector('#password')

//2. Funciones
function validarUser (e){
    e.preventDefault()

    for (let i = 0; i < cuentas.length; i++) {
        let user = cuentas[i];
        let validacionUser = userName.value.toLowerCase() === user.nombre.toLowerCase();
        let validacionPass = passName.value == user.pass;

        if (validacionUser && validacionPass) {
            console.log(`Bienvenido ${user.nombre}`);
            return;  // Sale de la función validarUser
        }
    }
    
    console.log(`Datos incorrectos ✖️`);
        
}

//3. Evento 
formInicio.addEventListener('submit',validarUser)