Mail

<!-- Chiedi all’utente la sua email, -->

- creo una variabile emailUser e salvo il valore di un prompt

<!-- controlla che sia nella lista di chi può accedere, -->

- creo una listaEmail (array) di email

- dentro un ciclo for verifico la condizione:
SE emailUser === listaEmail[i]{
    console.log('Accesso consentito!')
} else {
    console.log('Accesso non consentito!')
}

<!-- stampa un messaggio appropriato sull’esito del controllo. -->
