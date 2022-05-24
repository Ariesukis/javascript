
// ! Este evento se usa cuando el documento javascript esta en el header 
/*
document.addEventListener('DOMContentLoaded', () => {
    
    let titulo = document.getElementById('tituloWeb').textContent;
    
    console.log(titulo);

});
*/

// ! Metodos para obtener valores de los elementos
/*
let titulo = document.getElementById('tituloWeb').textContent;

let txtParrafo = document.querySelector('p').textContent;

let txtParrafos = document.querySelectorAll('.container .text-p');
console.log(txtParrafos);
*/

const h1 = document.getElementById('tituloWeb');
h1.textContent = 'Nuevo titulo';
h1.style.color = 'red';

// * Metodo hasAttribute verifica si un elemento tiene un atributo devuelve un booleano
/*
const el = h1.hasAttribute('textContent');
console.log(el);
*/

// *El método createElement crea un elemento HTML especificado por su tagName.
/* Crea un elemento li y le asigna un texto */
const li = document.createElement("li");
li.textContent = "item desde javascript";
console.log(li)


// * appendChild Agrega un nuevo elemento al final de la lista de un elemento hijo de un elemento padre especificado.
const listaDinamica = document.getElementById('parrafos');
const p = document.createElement('p');
p.textContent = 'Parrado desde javascript';
listaDinamica.appendChild(p);


// * Metodo addEventListener para boton
const btnInc = document.getElementById('btnInc');
const btnDec = document.getElementById('btnDec');
const conteo = document.getElementById('idConteo');
let fuente = 15;
let colorRandom, colorRandom2;

btnInc.addEventListener('click', () => {
    if(conteo.textContent == ''){
        conteo.textContent = 0;
    }
    fuente ++;
    conteo.textContent = parseInt(conteo.textContent) + 1;
    conteo.style.fontSize = `${fuente}px`;

    colorRandom = Math.floor(100000 + Math.random() * 900000);
    h1.style.backgroundColor = `#${colorRandom}`;
});

btnDec.addEventListener('click', () => {
    conteo.textContent > '0' 
    ? conteo.textContent = parseInt(conteo.textContent) - 1      
    : alert('tu numero no puede ser menor a 0');

    colorRandom2 = Math.floor(100000 + Math.random() * 900000);
    h1.style.color = `#${colorRandom2}`;
});


// ! Fragment

// * creando lista con fragment evitas reflow y hace el ciclo fuera del DOM
/*
const arrayAnimales = ['Perro', 'Gato', 'Caballo', 'Cerdo', 'Pato'];
const listaAnimales = document.getElementById('lista');

const fragment = document.createDocumentFragment();
arrayAnimales.forEach((animal) => {
    const li = document.createElement('li');
    li.className = 'list';

    const b = document.createElement('b');
    b.textContent = 'Animal: ';

    const span = document.createElement('span');
    span.id = 'text';
    span.textContent = animal;

    fragment.appendChild(li);
    fragment.appendChild(b);
    fragment.appendChild(span);
});
listaAnimales.appendChild(fragment);
*/


// * creando lista con innerHTML
/*
const arrayAnimales = ['Perro', 'Gato', 'Caballo', 'Cerdo', 'Pato'];
const lista = document.getElementById('lista');

let templateAnimales = '';

arrayAnimales.forEach((animal) => {
    templateAnimales += 
    `
    <li class="list">
        <b>Pais :</b>
        <span id="text">${animal}</span>
    </li>
    `
})
lista.innerHTML = templateAnimales;
*/


// * creando lista con Template
/*
const arrayAnimales = ['Perro', 'Gato', 'Caballo', 'Cerdo', 'Pato'];

const lista = document.getElementById('lista');
const liTemplate = document.getElementById('liTemplate');
const fragment = document.createDocumentFragment();

arrayAnimales.forEach((animal) => {
    const clone = liTemplate.content.cloneNode(true);
    clone.getElementById('text').textContent = animal;
    fragment.appendChild(clone);
})
lista.appendChild(fragment);
*/













