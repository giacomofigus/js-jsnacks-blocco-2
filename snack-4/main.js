/*
snack 4
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
*/

let numbers;

do {
    numbers = Number(prompt("Inserisci il numero", 23))
} while (numbers % 2 !== 0)