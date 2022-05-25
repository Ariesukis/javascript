// ! Array methods

const numbers = [1, 2, 3, 4, 5, 6];

const users = [
    { id:1, name: 'Aries', age: 19 },
    { id:2, name: 'Bryan', age: 22 },
    { id:3, name: 'Carlos', age: 20 },
    { id:4, name: 'Daniel', age: 22 },
]

//  *array.map - crea un nuevo array no cambia el array original sino que devuelve un nuevo array
// usando map para traer los elementos de un arreglo

const newArray = numbers.map( (number) => number);
console.log(newArray);


// usando map para multiplicar cada elemento del array por 2
/*
const newArray = numeros.map( (numero) => numero * 2);
console.log(newArray);
*/

// usando map para traer solo los nombres de los usuarios de un arreglo
/*
const names = users.map( (user) => user.name);
console.log(names);
*/

//  *array.filter - crea un nuevo array con los elementos que cumplen la condición de la función indicada
// usando filter para devolver solo numeros impares
/*
const newArray = numbers.filter( (number) => number % 2 === 1);
console.log(newArray);
*/

// usando filter para devolver usuarios entre 20 y 30 años
/*
const newArray = users.filter( (user) => (user.age >= 20 && user.age <= 30) ); 
console.log(newArray);
*/

// usando filter para mostrar todos los usuarios.. menos el usuario con id = 4
/*
const deleteUser = users.filter( (user)  => user.id !== 4);
console.log(deleteUser);
*/

//  *array.find - devuelve el primer elemento que cumpla la condición de la función indicada
// trae solo el nombre del primer usuario que tenga nombre Bryan
/* 
const {name} = users.find((user) => user.age === 22);
console.log(name);
*/

// trae el primer usuario que tenga nombre Carlos
/*
const newArray = users.find( (user) => user.name === 'Carlos');
console.log(newArray);
*/

// *array.some - devuelve 'true' si algun elemento cumple la condición de la función indicada
// usando some para verificar si alguno de los usuarios tiene 22 años
/*
const existeUsuario = users.some((user) => user.age === 22);
console.log(existeUsuario);
*/

//  *array.findIndex - devuelve el índice del primer elemento que cumpla la condición sino devuelve -1
/*
const index = users.findIndex( (user) => user.id === 2);
console.log(users[index]);

const indexDos = users.findIndex( (user) => user.id === 5);
console.log(indexDos); 
*/

// *array.slice - devuelve una copia del array indicando el inicio y el fin
/*
const newArray = users.slice(0, 2);
console.log(newArray);
*/

// *array.concat - se usa para unir dos array y devuelve un nuevo array con los elementos 
/*
const newArray = numbers.concat(users);
console.log(newArray);
*/

// *spread operator - se usa para unir dos array y devuelve un nuevo array con los elementos
/*
const newArray = [...users,...numbers];
console.log(newArray);
*/

//  *array.reduce - es un acumulador, el valor devuelto se va acumulando en el valor inicial
/*
const sumarNumeros = numbers.reduce( (total, number) => total + number);
console.log(sumarNumeros);

const arrayNumeros = [
    [1,2],
    [3,4],
    [5,6]
]
const unArray = arrayNumeros.reduce( (total, array) => total.concat(array));
console.log("ejemplo con reduce: " + unArray);

const arrayPlano = [].concat(...arrayNumeros);
console.log("ejemplo con spread operator: " + arrayPlano);

const arrayFlat = arrayNumeros.flat();
console.log("ejemplo con flat: " + arrayFlat);
*/

// *split - devuelve un array con todos los elementos separados por un caracter
/*
const cadenaMeses = "Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre";
const meses = cadenaMeses.split(",");
console.log(meses);
*/

// *join - devuelve un string con todos los elementos separados por un caracter
/*
const arrayMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const cadenaMeses = arrayMeses.join("-");
console.log(cadenaMeses);
*/






