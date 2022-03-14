const chalk = require('chalk');

//challenge 1
const log = console.log;

const alarma = () => {

    log(chalk.blue(`Soy una alarma`));

    setTimeout(() => {

        log(chalk.green(`Alarma activada`));

    }, 3000);
}

alarma();

//challenge 2
const log = console.log;

const alarma2 = (mensaje = "", tiempo = undefined) => {

    if (mensaje === "" && tiempo === undefined) {
        console.log(`Los campos no deben estar vacios`);
    } else {

        setTimeout(() => {

            log(mensaje);
        }, tiempo);
    }
}

alarma2('Hola!', 2000);

//challenge 3

const log = console.log;

const microondas = (comida = "", tiempo = undefined) => {

    if (comida === "" && tiempo === undefined) {
        console.log(`Los campos no deben estar vacios`);
    } else {

        setTimeout(() => {

            log(comida);
        }, tiempo);

        log(`Han pasado ${Math.floor((tiempo/1000) % 60)} segundos, la ${comida} está lista! cuidado te quemas!! 🔥 `);
    }
}

microondas('pizza', 3000);