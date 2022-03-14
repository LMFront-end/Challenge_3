//Promesas random
/*
¡Experimenta con la sintaxis de promesas! Genera un número de forma aleatoria utilizando Math.random, y en base al resultado, haz que tu promesa se complete o sea rechazada. Ahora, además del manejo de errores, ¿notaste algo diferente del primer ejemplo? ¡Exacto! Unimos el .then() con el .catch() uno atrás del otro. ¿Cómo es posible esto?*
*/

let num = Math.ceil(Math.random() * 10);

/* const aleatorio = new Promise((resolve, reject) => {

    if (num <= 3) {
        resolve(`El numero es: ${num}, es menor a 3 has ganado!`)
    } else {
        reject(`El número es ${num}, no es menor a 3, sigue intentando!`)
    }
}) */

/* const aleatorio = () => {

    return new Promise((resolve, reject) => {

        if (num <= 3) {
            resolve(`El numero es: ${num}, es menor a 3 has ganado!`)
        } else {
            reject(`El número es ${num}, no es menor a 3, sigue intentando!`)
        }
    })
} */

/* aleatorio().then(res => {

    console.log(`success: ${res}`)

}).catch(err => {

    console.error(`error: ${err}`)
}); */

//usando setTimeOut

/* const aleatorio = () => {

    return new Promise((resolve, reject) => {

        if (num <= 4) {

            setTimeout(() => {

                console.log('2. proceso terminado...');

                resolve(`${num} es menor a 4, Has ganado!`)
            }, 2000);
        } else {

            reject(`El numero no es menor a 4, Sigue intentando`);
        }
    });

}
console.log('1. generando numero aleatorio...');

aleatorio().then(res => {
    console.log(`3. El resultado es: ${res}`);
}).catch(err => {
    console.log(err);
}) */

//usando el async Await

/* async function aleatorio() {

    let promise = new Promise((resolve, reject) => {

        console.log(`Si el numero es menor a 4 Ganas!`)
        console.log(`Generando un número aleatorio...`)

        if (num < 4) {

            setTimeout(() => {
                resolve(`El numero es ${num}, has ganado `)
            }, 2000);
        } else {

            reject(`Sigue intentado`);
        }
    })

    let result = await promise;
    console.log(result);
}

aleatorio(); */