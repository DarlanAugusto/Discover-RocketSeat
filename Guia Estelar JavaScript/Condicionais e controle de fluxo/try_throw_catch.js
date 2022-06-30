console.log("Iniciei, estou registrando a função...");
function sayMyName(name) {
    if(!name) {
        throw new Error("Por favor, informe um nome!");
    }
}

console.log("Pronto, agora tentarei executar...");
try {
    // tentará executar a funcção  
    sayMyName();
} catch (error) {
    // não conseguiu executar a função, faz algo
    console.log(error);
}

console.log("...Continuo executando o código...");