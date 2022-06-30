// function hoisting

let name = "Darlan";

sayMyName(name);

function sayMyName(name) {
    console.log(`Your name is ${name}`);
}