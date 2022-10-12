const posts = [
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
];

let idPost = parseInt(prompt('Ingresa el id a buscar'));

//! Callbacks
/*
const findPostById = (id, callback) => {

    const post = posts.find(item => item.id === id);   

    if(post){
        callback(null, post);
    }
    else{
        callback("no se encontro el post " + id);
    }
    
}

findPostById(idPost, (err,post) => {
    if(err){
        return console.log(err);
    }
    console.log(post);
})
*/

//! Promesas - las promesas son asincronas

const findPostById = (id) => 

    new Promise((resolve,reject) => {

        setTimeout(() => {
            const post = posts.find( item => item.id === id );
    
            if(post){
                resolve(post)
            }else{
                reject("no se encontro el post con id " + id);
            } 
        }, 1000);

    }); 

// Buscando 1 post por id
const buscarIdPost = async (id) => {
    try {
        const post = await findPostById(id);
        console.log(post);       
    } catch (error) {
        console.log(error);
    } finally {
        console.log('post por id')
    }
}

buscarIdPost(idPost);

// Buscando 1 o más post por id
const findAllPost = () => 

    new Promise((resolve,reject) => {

        setTimeout(() => {
            const post = posts;
    
            if(post){
                resolve(post)
            }else{
                reject("no se encontro el post con id " + id);
            } 
        }, 1000);

    }); 

const buscarAllPosts = async () => {
    try {
        const posts = await Promise.all([
            findPostById(1),
            findPostById(2),
            findPostById(3)
        ])
        console.log(posts);       
    } catch (error) {
        console.log(error);
    } finally {
        console.log('trae todos los post')
    }
}

buscarAllPosts();


