// ! practica DOM
const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const footer = document.getElementById('footer');
const templateTotal = document.getElementById('templateTotal');
const fragment = document.createDocumentFragment();
const btnBotones = document.querySelectorAll('.card .btn-a');
const btnBotonesEliminar = document.querySelectorAll('.card .btn-e');

document.addEventListener('click', (e) => {

    if(e.target.matches('.btn-a')){
        agregarCarrito(e);
    }
    else if(e.target.matches('.btn-e')){
        eliminarCarrito(e);
    }

});

const carritoCompras = [];

const agregarCarrito = (e) => {

    const producto = {
        nombre: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio),
    }

    const indice = carritoCompras.findIndex(item => item.id === producto.id);
   
    indice === -1 ? carritoCompras.push(producto) : carritoCompras[indice].cantidad++;
    
    pintarCarrito(carritoCompras);
    pintarFooter();

}

const eliminarCarrito = (e) => {
    
        const indice = carritoCompras.findIndex(item => item.nombre === e.target.dataset.fruta);
        console.log(indice);
        if(indice !== -1){
            if(carritoCompras[indice].cantidad > 0){
                carritoCompras[indice].cantidad--;
            }
            else{
                carritoCompras.splice(indice,1);
            }
        }
        else{
            alert('No existe el producto');
        }
    
        pintarCarrito(carritoCompras);
    
}

const pintarCarrito = (array) => {

    carrito.textContent = '';

    array.forEach((item) => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.lead').textContent = item.nombre;
        clone.querySelector('.badge').textContent = item.cantidad;
        clone.querySelector('.precio span').textContent = item.precio * item.cantidad;
        fragment.appendChild(clone);
    })

    carrito.appendChild(fragment);

    pintarFooter();
}

const pintarFooter = () => {
    
        footer.textContent = '';

        const precioTotal = carritoCompras.reduce((total, array) => total + (array.precio * array.cantidad), 0);

        console.log(precioTotal);
    
        const clone = templateTotal.content.firstElementChild.cloneNode(true);
        clone.querySelector('.total span').textContent = precioTotal;
        
        footer.appendChild(clone);
    
}



