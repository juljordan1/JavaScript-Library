// Equal
'3' == 3;
console.log('3' == 3);

/*
    - coercion is the process of converting a value frome one type to another
    -in the above example, javascript assumes that we are trying to check if a number of 3 is equal to another number of 3,
    even though one of our values is a string.


*/

// Strict Equal - this overridees jaavascript coercion 
console.log(3 === 3); // true
console.log('3' === 3); // false

// Not Equal
console.log('3'  != 3);

// Strict Not Equal - this overrides javascript coercion
console.log('3  !== 4');
console.log(4  !==4);

// Greater Than
3 > 2 // true

// Less Than
2 < 3 // true

// Greater Than Or Equal to
3 >= 2; // not confused to be confused with => ( fat arrow function)

// Less Than or Equal to 
2 <=3;

// And
2 && 3

// OR
2 | | 3;

