/* Cuarta Vuelta:

Resultado:

1- Toad
2- Mario
3- Luigi */

//Pestos 1- Toad | 2- Mario | 3- Luigi
let karts = {

    toad: 0,
    mario: 0,
    luigi: 0,

    resultadoCarrera: function() {

        if (karts.toad < karts.mario &&
            karts.toad < karts.luigi &&
            karts.mario < karts.luigi) {

            return true
        }

        return false;
    },

    intervalo: setInterval(function() {

        //establecemos un Math.ramdom

        karts.toad = Math.ceil(Math.random() * 3);
        karts.mario = Math.ceil(Math.random() * 3);
        karts.luigi = Math.ceil(Math.random() * 3);


        if (karts.resultadoCarrera()) {

            clearInterval(karts.intervalo);

            console.log(`Participante Toad 🍄: ${karts.toad}`);
            console.log(`Participante Mario 👲🏽: ${karts.mario}`);
            console.log(`Participante Luigi 👨🏽‍🌾: ${karts.luigi}`);
        }
    }, 1000),
}