// !* Para trabajar con modulos se debe usar import y export
// !* Al importar se puede poner un alias usando 'as'

import platano, { fresa as strawberry, sumar, Persona} from "./prueba.js";

console.log(strawberry);
sumar(2,3);  
 
const personaUno = new Persona("Aries");
console.log(personaUno);
 
console.log(platano);


// !* Las IIFE son expresiones de funcion ejecutadas inmediatamente - son autoejecutables

(function(){
    const saludo = "hola";
    console.log(saludo);
})();

(() => {
    const saludoIngles = "hello";
    console.log(saludoIngles);
})();

