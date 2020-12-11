/*
-variables are named containers from storing data values or data types
-name variables to refer to data that is holding  at a later time
*/

     let     number  =     2;
/*    (1)     (2)   (3)    (4)

      1. javascript keyword
      2. variable name
      3. assignment operator
      4. value of the varible

/*

let numberOne = 5;
let numberTwo= 3;

console.log(numberOne + numberTwo);

/*
-a variable name must begin with a Letter, underscore, or a dollar ($)
-a number may follow the above characters, but they cannot come first
-javascript is case sensitive- 'hello' and 'Hello' are different variables
-camelCase is the best practive for naming variables
*/

/*
    var, let, const

        -var: 'old' keyword for var.
        -Let: 'new' keyword for var.
        -const: 'new' keyword for var; declares an unchangelable value
*/

/* 
  declaration vs initialization
    
        declaration are the LEFT SIDE of the assignment operator when writing a variable
        initialization is the right of the assignment operator, or the value we're assigning to a variable
*/

let x;
console.log('Declaration:', x);

x=10;
console.log('Initialization:', x);

x = 20;
console.log('Reinitialization:', x)