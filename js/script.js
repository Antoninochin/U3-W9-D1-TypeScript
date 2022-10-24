"use strict";
let bob = Math.floor((Math.random() * (100 - 1) + 1));
let tom = Math.floor((Math.random() * (100 - 1) + 1));
let numeroCasuale = Math.floor((Math.random() * (100 - 1) + 1));
console.log(numeroCasuale)
if (bob === numeroCasuale) {
    console.log('Bob hai indovinato');
}else if (bob <= numeroCasuale) {
    console.log('Peccato Bob eri vicino');
}
if (tom === numeroCasuale) {
    console.log('Tom hai vinto');
}else if (tom <= numeroCasuale) {
    console.log('Tom mancava poco');
}
if(bob && tom !== numeroCasuale){
    console.log('Nessuno dei due ha vinto')
}

// function randomNumber(min, max){
//      let random = Math.floor((Math.random() * (1 - 10) + 1))
//      document.getElementById('show').innerHTML = random
//  }
