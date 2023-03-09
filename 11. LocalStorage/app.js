// !** LocalStorage permite guardar datos en el navegador
// !** Se almacenan en las diferentes sesiones de navegacion y no tienen fecha de expiracion

/* Guardar una clave y una cadena en localStorage */
//localStorage.setItem('nombre', 'Aries');


/* Obtener el valor de la clave 'nombre' de localStorage y registrarlo en la consola. */
//const persona = localStorage.getItem('nombre');
//console.log(persona);

/* Elimina el elemento con la clave 'nombre' de localStorage. */
//localStorage.removeItem('nombre')

/* Borra el localStorage. */
//localStorage.clear();

const usuarios = [
    {
        nombre: 'Aries',
        correo: 'aries@gmail.com'
    },
    {
        nombre: 'Jesus',
        correo: 'jesus@gmail.com'
    },
    {
        nombre: 'Jennifer',
        correo: 'jenny@gmail.com'
    }
];

localStorage.setItem('usuarios', JSON.stringify(usuarios));

if(localStorage.getItem('usuarios'))
{
    const usuariosLocal = JSON.parse(localStorage.getItem('usuarios'));
    console.log(usuariosLocal);
}


