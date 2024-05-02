'use strict';

const numeroRandomUser = Math.floor(Math.random() * 6 + 1);
console.log('Il tuo punteggio: ', numeroRandomUser);
const numeroRandomComputer = Math.floor(Math.random() * 6 + 1);
console.log('Il punteggio del computer: ', numeroRandomComputer);

if (numeroRandomUser > numeroRandomComputer){
    console.log('Hai vinto!');
} else if (numeroRandomUser === numeroRandomComputer){
    console.log('Hai ottenuto lo stesso punteggio del computer!');
} else {
    console.log('Il computer ha vinto!');
}