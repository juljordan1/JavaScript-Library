// Ternary are basically acts as a shortcut for writing if & if/else statements

let num = 6;

// Ternary:
(num > 0) ? console.log('yes') : console.log ('no');
// (coondition) ? code to run if conditions true : code to rune if condition
// not true


// Instead of:
if (num > 0) {
    console.log('yes');
} else {
    console.log('no');
}

// Conditional with if & else if
if (num > 10) {
    console.log('a first statement');
} else if (num < 0) {
    console.log("another statement")
} else {
    console.log('yet another, man');

}
// Same as above but a ternary:
(num > 10) ? console.log('a first statement') : (num < 0) ? 
("another statement") : console.log ('yet another, man')

//Can also rewrite our ternary to make more readible:
(num > 10) ? console.log('a first statement')
: (num < 0) ? console.log('another statement')
: console.log ('yet another, man');

let age = 30
(age >= 30) ? console.log("Yay! You can rent a car!") {
    console.log('yes');
}