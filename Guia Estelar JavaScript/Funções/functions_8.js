// funções construtoras

function Person(name, age, direction) {
    this.name = name;
    this.age = age;
    this.walk = () => {
        return `${this.name} está andando para ${direction}`;
    }
}

const Darlan = new Person("Darlan", 18, "frente");
const Joao = new Person("João", 32, "trás");

console.log(Darlan.walk());
console.log(Joao.walk());

console.log(new Date("2022-06-29"));