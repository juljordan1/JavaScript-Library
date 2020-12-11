/*Properties and methods

    -In most cases, properties are qualities related to the data we're working with, and methods are actions we can perform 
    data we're working with. Using a method causees something to happen to the data, while using a 
    property returns information about the data
    -.property and .methods()
*/


// String Properties

// Length
let myName = 'Julien';
console.log(myName.length);

// STRING MEHTODS

let myDogsName = 'luna';
console.log(myDogsName.toUpperCase()); // change a string to uppercase

let home = 'My home is Indianapolis';
console.log(home.includes('Indianapolis'));

let sent = 'This sentence will be split into individual parts'
console.log(sent.split('  ')); // splits at each individual character
console.log(sent.split('    '))// split at each space in the original string
console.log(sent.split(' , ')) // split at the comma

