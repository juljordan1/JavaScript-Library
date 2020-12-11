let food = ['Pecan Pie' , 'Shrimp' , 'Quesadilla' , 'Hot Dog'];

// regular for loop
for (let i = 0; < food.length; i++) {
    console.log(food[i])
}

// forEach() method
food.forEach(function(foodItem) {
    console.log(foodItem)
})


//forEach () method - fat arrow function
food.forEach(foodItem => console.log(foodItem));

//----------------------------------------------

for (let i = 0; i < food.length; i++) {
    listMyFood(food[i]);
}

function listMyFood(foodItem) {
    console.log
}

// Look at MDN docs for the forEach() method
// Challenge: in the forEach() method, include the optional index parameter, and print that index to the console
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hot Dog'];
// concise body arrow function
food.forEach((foodItem, index) => console.log(foodItem, index));
// block body arrow function
food.forEach((foodItem, index) => {
    console.log(foodItem, index);
})
// function declaration
food.forEach(function(foodItem, index) {
    console.log(foodItem, index);
})
/*
CHALLENGE
************
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie to the end of the array
    - And replace one of the existing movies with another one
*/
let movies = ['Phantom Menance', 'Attack of the Clones', 'Revenge of the Sith', 'Solo', 'Rogue One', 'A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'];
movies.forEach(element => console.log(element));
movies.push('Force Awakens');
movies.splice(3, 1, 'The Rise of Skywalker')
console.log(movies);