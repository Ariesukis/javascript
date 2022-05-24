/** 
  * ! Explicacion de array
*/

//const frutas = [ 'manzana', 'uva', 'pera'];
/*
frutas.push('naranja'); //añade un elemento al final del array
const frutaEliminada = frutas.pop(); //elimina el ultimo elemento del array

frutas.unshift('kiwi'); //añade un elemento al principio del array
frutas.shift(); //elimina el primer elemento del array


for (let fruta of frutas) {
    document.write(fruta + '<br>');
}

document.write(`la fruta eliminada fue ${frutaEliminada}`);
*/

// ! Transforma cada numero multiplicado por 2 en una cadena de texto
//const numeros = [1,2,3,4].map(n => n * 2);
//console.log(numeros);

// ! Filtra numeros que no son pares
//const numeros = [1,2,3,4,5,6,7,8,9].filter(n => n % 2 !== 0);
//console.log(numeros);

// ! Encuentra y devuelve un valor
//const numeros = [1,2,3,4,5,6,7,8,9].find(n => n === 5);
//console.log(numeros);

// ! Encuentra la posicion dentro del arreglo de un valor
//const numeros = [1,2,3,4,5,6,7,8,9].findIndex(n => n === 3);
//console.log(numeros);

// ! Rellena el arreglo con un valor
//const arreglo = ['','',''].fill('aries');
//console.log(arreglo);

// ! Revisa si todos son iguales
//const arreglo = [1,1,5,1,1,1].every(n => n === 1);
//console.log(arreglo);

// ! Revisa si alguno es diferente
//const arreglo = [1,1,5,1,1,1].some(n => n === 1);
//console.log(arreglo);

/** 
  * ! Ejemplo con array
*/

/*const frutas = [];
const carrito = prompt('¿Qué fruta quieres comprar? 🍓');
frutas.push(carrito);

while ( confirm('¿Desea comprar mas fruta? 🍌')) {
const carrito = prompt('¿Qué fruta quieres comprar? 🍓');
frutas.push(carrito);
}

for (let fruta of frutas) {
    document.write(fruta + '<br>');
}
*/

/** 
  * ! Sumar dos numeros de un arreglo para encontrar un numero objetivo
*/
/*
const Numeros = [2,5,6,8,1,4,9,4];

const objetivo = parseInt(prompt('¿Qué número objetivo es?'))

for(let x = 0; x < Numeros.length; x++) {
    for(let y = 0; y < Numeros.length; y++) {
        if(Numeros[x] + Numeros[y] === objetivo) {
            console.log(`posicion: [${Numeros.indexOf(Numeros[x])}] + posicion: [${Numeros.indexOf(Numeros[y])}] = ${objetivo}`);
            console.log(`${Numeros[x]} + ${Numeros[y]} = ${objetivo}`);
        }
    }
}
*/

/** 
  * ! Funciones
*/

// *funcion declarada
/*
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.write(numeroAleatorio(1, 10));
*/

// *funcion expresada
/*
const numeroAzar = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.write(numeroAzar(10, 100));
*/

// *Arrow function
/*
const numeroRandom = (min, max = 20) => Math.floor(Math.random() * (max - min + 1)) + min;
document.write(numeroRandom(1));
*/

//frutas.forEach( fruta => console.log(fruta) );

/*frutas.forEach( (fruta, index) => {
    console.log(`${index} - ${fruta}`);
} )
*/