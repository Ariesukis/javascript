const url = 'https://jsonplaceholder.typicode.com/posts/';

//* Estructura Base de Fetch
/*
fetch(url)
    .then((res) => res.json())
    .then(data => console.log(data))
    .catch(e => console.log(e))
    .finally(() => console.log('finalizo'))
*/

let idPost = parseInt(prompt('Ingresa el id a buscar')); 

const findPostById = async (id) => {

    try {   
        const res = await fetch(url + id);
        const post = await res.json();
        console.log(post);

    } catch (e) {
        console.log(e);
    }

}

findPostById(idPost);








