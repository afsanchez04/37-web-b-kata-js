
let nombre = "jose"
let frutas = ["fresa",'mango','manzana',"naranja","pera"]
let persona = {
    nombre: "maria",
    edad: 23,
    correo: 'maria@correo.com'
}

//Guardar datos en localstorage

function agregarDatosLocal (key,value){
    if( typeof value == "string"){
        localStorage.setItem(key,value)
    }else{
        localStorage.setItem(key,JSON.stringify( value ))
    }
}

agregarDatosLocal ("nombre",nombre)
agregarDatosLocal ("frutas",frutas)
agregarDatosLocal ("persona",persona)

//Llamar datos del locarstorage

function mostrarDatos (key){

    let datoLocal = localStorage.getItem(key)

    return datoLocal
   
}

let resultNombre = mostrarDatos('nombre')
let resultFrutas = JSON.parse( mostrarDatos('frutas') )
let resultPersona = JSON.parse( mostrarDatos('persona') )

console.log( resultNombre )
console.log( resultFrutas )
console.log( resultPersona )


function borrarItem (item){
    localStorage.removeItem(item)
}

function borrarTodo(){
    localStorage.clear()
}

borrarItem('nombre')
borrarTodo()

