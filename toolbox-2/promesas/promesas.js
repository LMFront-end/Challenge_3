/* let x = 10;

const p = new Promise((resolve, reject) => {

    if (x == 10) {
        //resultado positivo
        resolve('La variable es igual a 10');
    } else {
        reject('La variable no es igual a 10');
    }
});

//valor positivo
p.then(res => {

    console.log(`success: ${res}`)

}).catch(err => {

    console.error(`error: ${err}`)
}); */

//Ejemplo con operaciones asincronas

/* let num = 10;

console.log('1. proceso iniciado...');

setTimeout(() => {

    num = num * 3 + 2;

    console.log('2. proceso terminado...');

}, 2000);

console.log(`El resultado es: ${num}`); */


//ejercicio echo con promesa

/* let num = 10;

const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {

        num = num * 3 + 2;

        console.log('2. proceso terminado...');

        resolve(num)
    }, 2000);
});

console.log('1. proceso iniciado...');

promesa.then(res => {
    console.log(`3. El resultado es: ${res}`);
}); */

//promesas consecuticas

let usuarios = [

    {
        id: 1,
        nombre: 'Lina'
    },

    {
        id: 2,
        nombre: 'María'
    }
];

let telefonos = [

    {
        id: 1,
        telefono: 3152564895
    },

    {
        id: 2,
        telefono: 3185984875
    }
];

const obtenerUsuario = id => {

    return new Promise((resolve, reject) => {

        if (usuarios.find(usuario => usuario.id === id)) {
            console.log('El usuario existe!');
            resolve(obtenerTelefono(id));
        } else {
            reject('El usuario NO existe!');
        }
    });
};

const obtenerTelefono = id => {

    return new Promise((resolve, reject) => {

        if (telefonos.find(telefono => telefono.id === id)) {
            resolve('El telefono existe!');
        } else {
            reject('El telefono NO existe!');
        }
    });
};


obtenerUsuario(1)
    .then(res => {
        return res;
    })
    .then(mensaje => {
        console.log(mensaje);
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    })