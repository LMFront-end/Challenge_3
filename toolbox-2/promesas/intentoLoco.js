//funcion anónima autoejecutable (IIFE)
(() => {

    const $fetchAsync = document.getElementById('fetch-async'),
        $fragment = document.createDocumentFragment();

    //creación de la función asincrónica

    async function getData() {

        try {

            let res = await fetch("https://jsonplaceholder.typicode.com/albums/1/photo"),
                json = await res.json();

            console.log(res, json);

            //validación

            //if(!res.ok) throw new Error("Ocurrio un Error al solicitar los Datos")

            if (!res.ok) throw { status: res.status, statusText: res.statusText }

            json.forEach(el => {

                const $p = document.createElement('p');

                const $img = document.createElement('img');

                $p.innerHTML = `${el.title}`
                $img.src = `${el.thumbnailUrl}`

                $fragment.appendChild($p);
                $fragment.appendChild($img);
            });

            $fetchAsync.appendChild($fragment);

        } catch (err) {

            console.log(err);

            let message = err.statusText || "Ocurrío un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;

            //opcional
        } finally {

            console.log('Esto se ejecutará independientemente del try ... catch')
        }
    }

    getData();


})();