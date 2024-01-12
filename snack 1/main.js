/*
snack 1:
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50

*/

const arrayNumb = [];
let numb;
let sum = 0; 

do{
    numb = Number(prompt("Inserisci un numero"))  ;
    arrayNumb.push(numb);
    sum = sum += numb;
}while( sum <= 49 )
