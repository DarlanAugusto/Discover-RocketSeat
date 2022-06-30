// Manipulando arrays

let techs = new Array("html", "css", "js");

console.log("Array:", techs);

// adicionar um item no final
techs.push("php");
console.log("Adicionar um item no final:", techs);

// adicionar um item no começo
techs.unshift("node.js");
console.log("Adicionar um item no começo:", techs);

// remover do fim
techs.pop();
console.log("Remover do fim:", techs);

// remover do começo
techs.shift();
console.log("Remover do começo:", techs);

// pegar somente alguns elementos do array
console.log("Pegar somente alguns elementos do array:", techs.slice(1, 3));

// remover um ou mais itens em qualquer posição do array
techs.splice(1, 1);
console.log("Remover um ou mais itens em qualquer posição do array:", techs);

// encontrar a posição de um item no array

let index = techs.indexOf("html");
console.log("Posição do html:", index);

techs.splice(index, 1);
console.log(techs);