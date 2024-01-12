/*
snack 3
Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro
*/

const arrayOne = ["12", "45", "65", "43", "77", "32"];
const arrayTwo = ["34", "35", "67"];

let randomNumb = Math.floor(Math.random() * 100) + 1;

for(let i = 0; i <= arrayOne.length; i++ ){

    if(arrayTwo.length < i){
        arrayTwo.push(randomNumb)
        console.log(arrayTwo);
    } 
}