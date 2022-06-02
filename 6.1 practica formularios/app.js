const formulario = document.getElementById("formulario");
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');

const msgForm = document.getElementById('msgForm');
const alertName = document.getElementById('alertName');
const alertEmail = document.getElementById('alertEmail');

const infoForm = document.getElementById('infoForm');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();

const usuarios = []; 

const validarNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const validarEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;


const formularioValido = (array) => {
    msgForm.classList.remove('d-none');
    
    array.push({
        nombre: userName.value.trim(),
        correo: userEmail.value.trim()
    });

    pintarUsuarios(usuarios);
    
}

const formularioInvalido = (errores) => {
    //console.log(errores);
    errores.forEach( item => {
        item.tipo.classList.remove('d-none');
        item.tipo.innerHTML = item.mensaje;
        item.tipo.classList.add('is-invalid');
    });

}

const pintarUsuarios = (array) => {
    
    infoForm.textContent = '';

    array.forEach((item) => {

        const clone = template.content.cloneNode(true);
        clone.querySelector('.infoFormNombre').textContent = item.nombre;
        clone.querySelector('.infoFormCorreo').textContent = item.correo;
        fragment.appendChild(clone);
    });

    infoForm.appendChild(fragment);

}

//test() devuelve true si la cadena de texto coincide con el patrón especificado
//trim() elimina los espacios en blanco al inicio y al final de una cadena de texto

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    msgForm.classList.add('d-none');

    const errores = [];

    //Validar nombre
    if(!validarNombre.test(userName.value.trim()) || !userName.value.trim()){
        userName.classList.add('is-invalid');
        errores.push({
            tipo: alertName,
            mensaje: 'Nombre invalido'
        });
    }else{
        userName.classList.remove('is-invalid');
        userName.classList.add('is-valid');
        alertName.classList.add('d-none');
        }

    //Validar email
    if(!validarEmail.test(userEmail.value) || !userEmail.value.trim()){
        userEmail.classList.add('is-invalid');
        errores.push({
            tipo: alertEmail,
            mensaje: 'Email invalido'
        });
    }else{
        userEmail.classList.remove('is-invalid');
        userEmail.classList.add('is-valid');
        alertEmail.classList.add('d-none');
    }

    // Si hay errores
    if(errores.length > 0){
        formularioInvalido(errores);
        return;
    }

    // Si no hay errores
    formularioValido(usuarios);

})