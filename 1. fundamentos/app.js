/** 
  * ! Operador ternario
*/
/* 
let edad = parseInt(prompt("cuantos años tienes"));

let res = edad >= 18 ? document.write("mayor") : document.write("menor");

edad >= 18 ? (
    alert("mayor de edad")
) : (
    alert("menor de edad")
);
*/

/** 
  * ! Switch
*/

/**
 let opciones = prompt(
    `Elija una opción:
    1. Sumar
    2. Restar
`)

switch (opciones) {
    case "1":
        let suma = parseInt(prompt("ingrese el primer numero")) + parseInt(prompt("ingrese el segundo numero"));
        alert(suma);
        break;

    case "2":
        let resta = parseInt(prompt("ingrese el primer numero")) - parseInt(prompt("ingrese el segundo numero"));
        alert(resta);
        break;
}
*/

/** 
  * ! Ciclos
*/

/*
let numero = parseInt(prompt("ingrese un numero"));
while(numero<=9){
    numero ++;
    document.write(numero + "<br>");
}
*/

/** 
  * ! Ciclos con Operador ternario
*/

/*let numeroMaquina = Math.floor(Math.random() * (10 - 1) + 1);
let numeroUsuario = parseInt(prompt("Adivina un numero del 1 al 10"));
let vidas = 3;

if(numeroUsuario>=1 && numeroUsuario<=10)// validamos que el numero este entre 1 y 10
{
    while (numeroUsuario != numeroMaquina && vidas > 1) // validamos que el numero sea igual al numero maquina y que tenga mas de 1 vida
    {
        vidas--;
        alert(`Fallaste, te quedan ${vidas} vidas`);
        (numeroUsuario < numeroMaquina) ? alert('El numero es mayor') : alert('El numero es menor');
        numeroUsuario = parseInt(prompt("Adivina un numero del 1 al 10"));
    }
    numeroMaquina === numeroUsuario ? alert('Ganaste 🥰') : alert('Perdiste 😭 el numero era ' + numeroMaquina);
}
else{
    alert("Ingresa un numero del 1 al 10");
}
*/


/*let numero = parseInt(prompt('Ingresa un numero'));

for(let i=0; i < 5; i++){
    numero --;
    document.write(numero + '</br>');
}*/


/** 
  * ! Array
*/

//let frutas = ['manzana', 'pera', 'uva', 'fresa', 'sandia'];
/*
for(let i=0; i<frutas.length; i++){
    document.write(frutas[i] + '</br>');
}
*/

/*for (const fruta of frutas) {
    document.write(fruta + '</br>');
}
*/


/** 
  * ! Function
*/

/*function numeroRandom (numUsuario, numMaquina, vidas) {
    
   while(numUsuario != numMaquina && vidas > 1){ 
        vidas --;
        alert(`Fallaste, te quedan ${vidas} vidas`);
        (numUsuario < numMaquina) ? alert('El numero es mayor') : alert('El numero es menor');
        numUsuario = parseInt(prompt("Adivina un numero del 1 al 10"));
   }
   return numUsuario === numMaquina ? alert('Ganaste 🥰') : alert('Perdiste 😭 el numero era ' + numMaquina);

}

let numMaquina = Math.floor(Math.random() * (10 - 1) + 1);
let numVidas = parseInt(prompt("Cuantas vidas quieres"));

numeroRandom(parseInt(prompt('Ingresa un numero')), numMaquina, numVidas);
*/

