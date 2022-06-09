const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const campos = new FormData(formulario);

    //FormData.values() Devuelve un iterator que permite recorrer todos los valores contenidos en este objeto.
    for (let item of campos.values()) {
        console.log(item);
    }

    //FormData.entries() Devuelve un iterator que permite recorrer todas las parejas clave/valor contenidas en este objeto.
    for (let item of campos.entries()) {
        console.log(item);
    }

    //FormData.get() Devuelve el primer valor asociado con una clave dada en un objeto FormData.
    const nombre = campos.get('userName');
    const correo = campos.get('userEmail');

    console.log(nombre, correo);

});
