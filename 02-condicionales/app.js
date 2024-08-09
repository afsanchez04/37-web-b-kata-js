

/* var edad = 18;

if(edad >= 18){
    console.log('Entraste a la condicional');
}

console.log('Fin del código'); */

//Ejemplo de if con semáforo

/* 
.toLowerCase()
.toUpperCase()
*/
/* var color = prompt('Escribe un color').toLowerCase(); */
/* if(color == 'rojo'){
    console.log('Detente')
}else if(color == 'amarillo'){
    console.log('Baja velocidad')
}else if(color == 'verde'){
    console.log('Acelerar')
}else{
    console.log('No conozco ese color')
} */

/* switch(color){
    case "rojo":
    case "rojoOscuro":
    case "rojoClaro":
        alert('Detente');
    break

    case "amarillo":
        alert('Baja velocidad');
    break

    case "verde":
        alert('Acelerar');
    break

    default:
        alert('No se que decir');

} */

//Solución 1:
/* var mayoredad = prompt('Escribe tu edad');
var nombre = prompt('Escribe un nombre').toLowerCase();

if (mayoredad >= 18) { 
    //console.log('Puede pasar a la discoteca') 
    switch (nombre) {
        case "mario": 
        case "carlos": 
            alert('Tiene acceso VIP'); 
        break
        default: alert('Acceso normal')
    }
}else { 
    console.log('Edad no valida para la discoteca') 
} */


//Solución 2: 

/* var nombre = prompt('cuál es tu nombre?').toLowerCase();
var edad = prompt('Cuál es tu edad?');
edad = Number(edad) 

if(edad >= 18){
    //alert('Puede ingresar a la disco')
    if(nombre == 'mario' || nombre == 'carlos'){
        console.log('Puede ingresar a VIP')
    }else{
        alert('Entras a general')
    }
}else if(edad < 18){
    alert('No puede ingresar a la disco')
}else{
    alert('Hablar con supervisor')
} */


//Solución 3: 

/* var nombre = prompt("¿Cuál es tu nombre?");
var edad = prompt("¿Cuál es tu edad?");

edad = Number(edad);

if (edad >= 25) {
    if (nombre === "Chenchis" || nombre === "María") {
        console.log(nombre + ", puedes ingresar a la zona VIP.");
    }else{
        console.log(nombre + ", puedes ingresar a la discoteca.");
    }
} else {
    console.log(nombre + ", no puedes ingresar a la discoteca.");
} */

//Solución 4:

/* var nombre = prompt("¿Cuál es tu nombre?").toLowerCase();
var edad = prompt("¿Cuál es tu edad?");

nombre =  nombre.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
edad = Number(edad);

console.log(nombre)

if (edad >= 25 && ( nombre === "chenchis" || nombre === "maria") ) {
    console.log(nombre + ", puedes ingresar a la zona VIP.");
} else if (edad >= 25) {
    console.log(nombre + ", puedes ingresar a la discoteca.");
} else {
    console.log(nombre + ", no puedes ingresar a la discoteca.");
} */





