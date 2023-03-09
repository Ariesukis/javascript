
//!* funcion constructora = plantilla = class

// !* Prototipos 
// !* Sirven para que los objetos hereden caracteristicas entre si
// !* Estos residen dentro de la funcion constructora del objeto
// !* Nos ayuda a que no se instancie el metodo al objeto, array, etc. automaticamente
// !* y asi no saturar nuestro objeto con muchos metodos

/*
function Persona(nombre){
    this.nombre = nombre;

    //metodos
    this.saludar = function(){
        return `${this.nombre} dice: Hola`;
    }
}

Persona.prototype.saludaringles = function(){
    return `${this.nombre} says: Hello`;
}

const juanito = new Persona('juanito');


console.log(juanito);
console.log(juanito.saludar());
*/


// !* class
// !* son una mejora para la herencia basada en prototipos
// !* los metodos se agregan fuera de la funcion constructora
// !* se añaden directo a la cadena de prototipos
/*
class Persona {
    constructor(nombre){
        this.nombre = nombre;
    }

    saludar(){
        return `${this.nombre} dice: Hola!`;
    }
}

const juanito = new Persona('juanito');

console.log(juanito)
console.log(juanito.saludar())
*/

// !* getter y setter
// !* GET no recibe parametros y siempre deben retornar algo
// !* SET solo puede recibir un parametro
// !* NO SON METODOS.. no usan (), se manejan como una propiedad
class Persona {
    constructor(nombre){
        this.nombre = nombre;
    }

    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    saludar(){
        return `${this.nombre} dice: Hola!`;
    }

    //se puede usar sin instanciar
    static staticSaludo(nombre){
        return `${nombre} saludo estatico!`;
    }
}

console.log(Persona.staticSaludo("Jesus"));

const juanito = new Persona('juanito');
juanito.setNombre = 'Aries';

console.log(juanito.getNombre)
console.log(juanito.saludar())
