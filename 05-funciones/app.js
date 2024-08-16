

let nombre = "carlos"

function saludar(nombre="desconocido",color="no sabemos",emoji="✖️"){
    //console.log("Hola mundo")
    return `Hola ${nombre} tu color es ${color} ${emoji}`
}

let miSaludo = saludar(undefined,"Rojo","🍅")

console.log( miSaludo ) 

//Declaración de función
/* function verificarEntrada(edad){
    if(edad >= 18){
        return "Puedes entrar"
    }else{
        return "No puedes entrar"
    }
}

console.log(verificarEntrada(19))
console.log(verificarEntrada(12))
console.log(verificarEntrada(29)) */

//Expresión de función
const verificarEntrada = function (edad){
    let numero = 3
    if(edad >= 18){
        return "Puedes entrar"
    }else{
        return "No puedes entrar"
    }
}
console.log(verificarEntrada(19))

//Función flecha o arrow function

const entra = (edad) => {
    if(edad >= 18){
        return "Puedes entrar"
    }else{
        return "No puedes entrar"
    }
}

//Return implicito

const result = edad => edad >= 18 ? "Entras" : "No entras"

console.log( result(19) )


//Scope

var color = "amarillo"

function miFuncion (){
    if (true){
        var mensaje = "Es true"
        console.log(mensaje)
    }else{
        var n = "pepe"
        console.log(n)
    }
}

console.log(mensaje)

