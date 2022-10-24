let bob: number = 5;
let tom: number = 10;
// let numeroCasuale: number = Math.floor(Math.random()*20);
let numeroCasuale: number = Math.floor((Math.random()*(10-1)+1))

if (bob === numeroCasuale) {
    console.log('Bob hai indovinato')
}else if(bob <= numeroCasuale){
    console.log('Peccato Bob eri vicino');
}else if(tom === numeroCasuale){
    console.log('Tom hai vinto')
}else if(tom <= numeroCasuale){
    console.log('Tom mancava poco')
}
