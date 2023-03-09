//**! el export default solo se puede usar una vez por archivo */
const platano = "🍌";
export default platano;

const fresa = "🍓";

function sumar(x,y){
    console.log(x + y); 
} 

class Persona {
    constructor(nombre){
        this.nombre = nombre;
    }
}

export { fresa, sumar, Persona }