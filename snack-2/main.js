/*
snack 2
genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale
*/
let numb;
let randomNumb = 23 //Math.floor(Math.random() * 100) + 1;

do{
    numb = Number(prompt("Inserisci un numero"));
    console.log(numb);
    console.log(randomNumb);

    if(numb > randomNumb){
        console.log("numero è troppo alto");
    } else{
        console.log("numero troppo basso");
    }
}while( numb = randomNumb)