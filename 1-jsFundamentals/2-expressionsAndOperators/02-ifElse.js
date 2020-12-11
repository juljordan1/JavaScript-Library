let temp = 75;

// Read as, of "temp" is than 70, console.log "Wear a jacket", if "temp"
// is Not less than 70, console.log "No jacket necessary"

//     console.log('Wear a jacket');
// } else {
//     console.log ('No jacket necessary');
// }
// Bronze
let name = 'Julien';
if (name == 'Julien') { 
    console.log (name)
} else{ 
    console.log ("Hello, what is your name")
}

// Silver
if (name == 'Julien') {
    console.log ('Hello, my name is', name)

}else {


}

/* CHALLENGE
************
    Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/






let myName = 'zAchARy';

// console.log(myName.charAt(4));
// console.log(myName[0]);
// console.log(myName.slice(1))

// Bronze Solution
// if the first letter is Equal to an upper case version of the first letter
if (myName [0] == myName [0].toUpperCase () )  {
    console.log(myName);
} else {
    console.log ("Hey, this isn't written correctly")
}

// parameters is the space between start and end/or characters
// Silver
if (myName [0] == myName [0].toUpperCase()) {
    console.log(myName.charAt(0)); // or myName [0]
} else {
    console.log(myName.slice (1).toLowerCase())
} 
// Gold
if (myName [0] == myName[0].toUpperCase()) {
    console.log("true body:", myName.charAt(0) + myName.slice (1).toLowerCase()); 
} else {
    console.log(myName.charAt (0).toLowerCase())
} 

/*
CHALLENGE
************
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 17;
if (age <= '17' ) {
    console.log("You're too young to do anything");
} else if (age >= 18 && age <= 20) {
    console.log ("You can vote");
} else if (age>= 21 && age < 25) {
    console.log("You can drink!");
} else if (age >= 25) {
    console.log ("You can rent a car!");
}

let age = 23;
if (age >= 25){
    console.log("Yay! You can rent a car!");
}else if (age <)
