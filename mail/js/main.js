'use strict';

const listaEmail = ["danielebernassola@gmail.com", "mariorossi@libero.it", "luigiverdi@gmail.com", "lucabianchi@libero.it", "daniberna02@gmail.com"];
console.log(listaEmail);
const emailUser = prompt('Inserisci la tua email');
let emailIsPresent = 0;

for (let i = 0; i < listaEmail.length; i++){
    if (emailUser === listaEmail[i]){
        emailIsPresent = 1;
    }
}
if (emailIsPresent === 1){
    console.log('Accesso consentito!');
} else {
    console.log('Accesso non consentito!');
}