/*
Arrow Functions
*/

// Block Body Arrow Function
let hello = () => {
    console.log('Hello world');
}


hello();

// regulatr function expression
let hello = function() {

}

//Concise Body Arrow Function
let hello = () => console.log('Hello world');

hello();

/*
Note: concise body arrow functions return any value by default, whereas block body arrow functions do not - we need to implicity specify what value we to return
*/

function hello () 

// Concise Body vs Block Body

// concise body arrow function
let apples = number => console.log(`There are ${number} apples.`);

apples(10);
apples(5);
apples('five');


// block body arrow function

let apples = number => {
    console.log(`There are ${number} apples.`);
}

apples (10);
apples ('ten')
apples (false);
