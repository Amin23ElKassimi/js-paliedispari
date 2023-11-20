// 1)Pari e Dispari:
// L’utente sceglie pari o dispari 
// e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando un'altra funzione)
// Dichiariamo chi ha vinto.


// usando una funzione 01
// function randomIntFromInterval(min, max) { // min and max included 
//     return Math.floor(Math.random() * (max - min + 1) + min)
//   }
// //  funzione 02
// function isEvenOrOdd(num) {
//     if (sum % 2 === 0) {
//         return "pari" ;
//     } else {
//         return "dispari" ;
//     }
// }

// // L’utente sceglie pari o dispari
// const inOddEven = prompt("Inserisci pari o dispari");
// console.log('hai scelto '+inOddEven)
// // e inserisce un numero da 1 a 5.
// const inUser = parseInt(prompt("Inserisci un numero da 1 a 5"));
// console.log('hai inserito ' + inUser);
// // Generiamo un numero random (sempre da 1 a 5) per il computer 
// const rndInt = randomIntFromInterval(1, 6)
// console.log( 'Numero generato dal PC '+ rndInt)

// //  Sommiamo i due numeri
// const sum = inUser + rndInt
// console.log("Somma " + sum)

// //  Stabiliamo se la somma dei due numeri è pari o dispari 
// const isEven = isEvenOrOdd(sum)

// // Dichiariamo chi ha vinto.
// if (inOddEven === isEven ) {
//     alert("Hai vinto!")
// } else {
//     alert ("Non hai vinto!")
// }



// 2)Palidroma:
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// E' vietato usare split(), reverse() e simili.



function fastestIsPalindrome(str) {
    let len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++)
      if (str[i] !== str[str.length - i - 1])
        return "is not a palindrome";
    return 'is a palindrome';
  }

 
  const result = fastestIsPalindrome(prompt("Inserisci una parola"));
  console.log(result) ;

  