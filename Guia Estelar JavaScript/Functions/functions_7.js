// callback function

let person = {
    nome: "Darlan",
    idade: 18,
    sexo: "masculino",
    pesoKg: 80.5,
    nacionalidade: "brasileiro"
}

let name =  person.nome;

function sayMyName(name) {
    console.log("Antes de executar a callback");
    name();
    console.log("Depois de executar a callback");
}

sayMyName(
    () => {
        console.log("Estou em um callback");
    }
);