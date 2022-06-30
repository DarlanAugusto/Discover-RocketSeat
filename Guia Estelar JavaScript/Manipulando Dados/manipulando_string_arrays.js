// Manipulando strings e arrays

let phrase = "Eu quero viver o Amor!";

let myArray = phrase.split(" "); // quebrou nos espaços e transformou em array

let phraseWithUnderscore = myArray.join("_"); // juntou os indices do array com o "_", transforndo em string

console.log(phraseWithUnderscore.toLowerCase()); // imprime tudo em minusculo