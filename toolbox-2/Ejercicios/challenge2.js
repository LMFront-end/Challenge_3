/*
Mini galería de fotos: Usando el endpoint de “Albums” que nos provee jsonplaceholder, el desafío es obtener todos los álbumes y mostrar una imagen usando la URL que nos provee cada elemento obtenido.

El link del endpoint a utilizar es el siguiente:

El link del endpoint a utilizar es el siguiente:

debes usar Fetch y promesas
*/

const root = document.getElementById('root');

const fetchData = async() => {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums/1/photos"
    );

    const data = await response.json();

    data.map((album) => {
        root.innerHTML += `
        <p>${album.title}</p>
        <img src="${album.thumbnailUrl}" />
        `;
        console.log(album);
    });
};

fetchData();

//2da forma

const url = "https://jsonplaceholder.typicode.com/albums/1/photos";


fecth(url)
    .then((result) => result.json())
    .then((albumes) => {
        albumes.map((album) => {
            root.innerHTML += `
        <p>${album.title}</p>
        <img src="${album.url}"/>
        `
        });
    });