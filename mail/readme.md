Mail

<!-- Chiedi all’utente la sua email, -->

- creo una variabile emailUser e salvo il valore di un prompt

<!-- controlla che sia nella lista di chi può accedere, -->

- creo una listaEmail (array) di email
- creo una variabile emailIsPresent e la imposto a 0 per verificare se sarà presente l'email

- creo un ciclo che verifica se l'email è presente:

for (let i = 0; i < listaEmail.length; i++){
    if (emailUser === listaEmail[i]){
        emailIsPresent = 1;
    }
}


SE (emailIsPresent === 1){
    console.log('Accesso consentito!');
} ALTRIMENTI {
    console.log('Accesso non consentito!');
}

<!-- stampa un messaggio appropriato sull’esito del controllo. -->
