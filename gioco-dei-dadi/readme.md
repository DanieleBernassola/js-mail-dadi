<!-- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. -->

- creo una variabile numeroRandomUser
- creo una variabile numeroRandomComputer
- assegno a numeroRandomUser e a numeroRandomComputer tramite Math.floor(Math.random() * 6 + 1); , un valore casuale da 1 a 6

<!-- Stabilire il vincitore, in base a chi fa il punteggio più alto. -->

SE (numeroRandomUser > numeroRandomComputer) {
    console.log('Hai vinto!');
} Altrimenti SE (numeroRandomUser < numeroRandomComputer) {
    console.log('Il computer ha vinto!');
} Altrimenti SE (numeroRandomUser == numeroRandomComputer) {
    console.log('Hai ottenuto lo stesso punteggio del computer!')
}