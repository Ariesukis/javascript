const formulario = document.querySelector('#formulario');
const main = document.querySelector("main");
const borrarTareas = document.querySelector('#borrarTareas');

let tareas = [];

const agregarTarea = tarea => {

    const objetoTarea = {
        nombre: tarea,
        id: `${Date.now()}`
    }

    tareas.push(objetoTarea);

}

const pintarTareas = () => {
    
    localStorage.setItem('tareas', JSON.stringify(tareas));

    main.textContent = "";

    tareas.forEach(item => {
        const article = document.createRange().createContextualFragment(
            `
            <div class="alert alert-success d-flex align-items-center justify-content-between">
                <p class="lead mb-0">${item.nombre}</p>
                <div>
                   <button class="btn btn-danger" data-id="${item.id}">Borrar</button>
                </div>
            </div>
            `
            );

        main.appendChild(article);
        borrarTareas.classList.remove('d-none');
    });

    if(tareas.length == 0){
        borrarTareas.classList.add('d-none');
    }
    
}

formulario.addEventListener('submit', (e) => {

    e.preventDefault();

    const data = new FormData(formulario);
    const [tarea] = [...data.values()];

    agregarTarea(tarea);
    pintarTareas();

});

document.addEventListener( 'click', e => {
    console.log(e.target.dataset.id);

    if(e.target.matches(".btn-danger")){
        tareas = tareas.filter( item => item.id !== e.target.dataset.id);
        pintarTareas();
    }

})

borrarTareas.addEventListener( 'click', (e) => {
    tareas = [];
    localStorage.clear();
    pintarTareas();
    
})

document.addEventListener( 'DOMContentLoaded', (e) => {

    if(localStorage.getItem('tareas')){
        tareas = JSON.parse(localStorage.getItem('tareas'));
        pintarTareas();
    }

})