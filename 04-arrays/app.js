
//arrays + ciclos

//Caso 1:

/* let frutas = ["manzana","pera","piña","uva","naranja","fresa","sandía","platano","coco","tomate"]
let icons = ['🍎',"🍐","🍍","🍇","🍊","🍓","🍉","🍌","🥥","🍅"]

//console.log( frutas[frutas.length] )

//Con un ciclo for vamos a recorrer el array de frutas y lo vamos a imprimir como una lista numerada

for (let i = 0; i < frutas.length; i++) {
   console.log( `${i+1}. ${frutas[i]} ${icons[i]}` ) 
} */

//Caso 2: 

let frutas = [
    {
        nombre: "manzana",
        icon: '🍎',
        cantidad: 5
    },
    {
        nombre: "pera",
        icon: '🍐',
        cantidad: 7
    },
    {
        nombre: "piña",
        icon: '🍍',
        cantidad: 3
    },
    {
        nombre: "uva",
        icon: '🍇',
        cantidad: 4
    },
    {
        nombre: "naranja",
        icon: '🍊',
        cantidad: 4
    },
    {
        nombre: "fresa",
        icon: '🍓',
        cantidad: 9
    },
    {
        nombre: "sandía",
        icon: '🍉',
        cantidad: 19
    },
    {
        nombre: "platano",
        icon: '🍌',
        cantidad: 2
    },
    {
        nombre: "coco",
        icon: '🥥',
        cantidad: 3
    },
    {
        nombre: "tomate",
        icon: '🍅',
        cantidad: 7
    }
]

//Imprimir en pantalla las frutas que tengan cantidad superior a 4

for(let i = 0; i<frutas.length; i++){

    if(frutas[i].cantidad > 23){
        console.log( `${i+1}. ${frutas[i].nombre} ${frutas[i].icon} Disponibles: ${frutas[i].cantidad}` )
    }

}

console.log(frutas)

let nombres = []
let producto = {
    nombre: "mouse",
    color: "blanco"
}
nombres.push('Jose')
nombres.push('Maria')
nombres.push(producto)

nombres.pop()

console.log(nombres)



