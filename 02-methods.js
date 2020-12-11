/*/*
    - arrays are containers that hold a list of items
        - arrays can hold numerous data types
    - denoted by []
*/
let list = ['orange', 'banana', 'apple'];
console.log(list[1]);
/*
    - when we call an array, we can append square brackets onto the end of our array with the index number that we want to reference.
    - javascript starts counting at 0
*/
let students = ['Amruta', 'Marco', 'Nick', 'Carolina', 4, true, ['Adam', 'Alexandra', 'Alexia', 'Allyson']];
console.log(typeof students); // object
console.log(students instanceof Array); // the instaceof operator is used to check the type of an object at run time. Will return a true or false value
console.log(students[2]); // Nick
console.log(students[1]); // Marco
// CHALLENGE: dive into the nested array in the students array, and pull out one of the values
console.log(students[6][2]); // Alexia
let name = students[6][1];
console.log(name); // Alexandra



*/





let food = ['Pecan Pie' , 'Shrimp' , 'Quesadilla' , 'Hot Dog'];



food.push ('Pizza');
console.log ('push:' , food);

// array. splice () - the splice allows us to add and remove elements from an array
food.splice(1,1, 'Bannas');
console.log('splice' , food);

food.splice(2, 0, 'Sweet Potato Pie');
console.log ('splice 2:' food);

a

ARRAY METHODS
- array methods are methods or functions that are built into JS, that we can use to make our lives as developers easier
*/
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hot Dog'];
// array.push() - allows us to push one or more elements to the end of our original array. Push method will always add the new elements to the END of the array
food.push('Pizza');
console.log('push:', food);
// array.splice() - the splice method allows us to add and remove elements from an array
food.splice(1, 1,'Bananas');
console.log('splice:', food);
food.splice(2, 0, 'Sweet Potato Pie');
console.log('splice 2:', food);
// array.pop() - the pop method removes the last item from an array
food.pop();
console.log('pop:', food);
// array.shift() - the shift method removes the first item from an array
food.shift();
console.log('shift:', food);
// array.unshift() - the unshift method adds one or more elements to the beginning of an array
food.unshift('Popcorn', 'Steak'); 
console.log('unshift:', food);