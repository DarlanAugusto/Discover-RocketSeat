// function expression
// function anonymous

let total = 0;

// paramentros (parameters)
const sum = function (number1, number2) {
    let total = number1 + number2;
    return total;
}

let number1 = 34;
let number2 = 78;

console.log(`O número 1 é ${number1}`);
console.log(`O número 2 é ${number2}`);
console.log(`A soma é ${sum(number1, number2)}`);

console.log(total);