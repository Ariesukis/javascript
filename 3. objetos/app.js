/*
   !objeto literario
*/

const computadora = {
    marca: 'Macbook Pro',
    modelo: '2018',
    memoria: 500,
    mouse: false,
    usos: ['escuela', 'trabajo', 'freelace'],
    otros: {
        colores: ['gris', 'negro', 'blanco'],
        versiones: {
            barata: 10000,
            cara: 20000
        }
    },
    compra(nombreCliente){
        console.log(`
            ${nombreCliente} acabas de comprar una ${this.marca} modelo: ${this.modelo}
        `);
    },
    get marcaMayusculas(){
        return this.marca.toLocaleUpperCase();
    },
    set agregarUso(nuevoUso){
        this.usos.push(nuevoUso);
    }
    
};
//computadora.compra('aries');

/*

// ! Mini CRUD
// insertar
computadora.ram = 8;

// actualizar
computadora.modelo = '2019';

// eliminar
delete computadora.mouse;

// Leer
console.log(computadora)
*/

// Verificas si existe una propiedad en el objeto
//console.log(computadora.hasOwnProperty('marca'));

/*
for(let propiedad in computadora ){
    console.log(computadora[propiedad])
}
*/

// ! Muestra datos de un objeto
//console.log(Object.getOwnPropertyNames(computadora))
//Object.values(computadora).forEach((item => console.log(item)));

// ! Destructuracion
// * Creas una variable de los Datos directo del objeto
//const { marca: marcaComputadora, memoria: memoriaComputadora } = computadora;

// * Creas una variable de los Datos de un objeto dentro del mismo objeto
//const { colores: coloresComputadora} = computadora.otros;
//const { otros: {versiones : versionesComputadora} } = computadora;
//console.log(versionesComputadora)

// * Creas una variable de un Arreglo de un objeto
/*
const { colores: coloresArray } = computadora.otros;
const [ colorUno, colorDos, colorTres, colorCuatro = 'no existe' ] = coloresArray;
console.log(colorCuatro);
*/

// * GET y SET en objetos
/*
console.log(computadora.marcaMayusculas);
computadora.agregarUso = "nuevo uso";
console.log(computadora.usos);
*/













