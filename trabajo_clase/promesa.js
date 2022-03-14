const data = fetch("https://jsonplaceholder.typicode.com/users");

data
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        console.log(response);
        const miDiv = document.getElementById('misDatos');

        let filas = "";
        response.forEach(el => {
            filas += `<li> nombre: ${el.name}</li>`
        })
        miDiv.innerHTML = filas;
    })
    .catch((err) => {
        console.log(err);
    });

document.getElementById("app").innerHTML =
    `<div id="misDatos"></div>`