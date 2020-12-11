/*
-


*/
// code structure
let num = -5;

switch (true) {
    case (num < 0 && num > -10):
        console.log('case 1 ran');
        break;
    case (num < 0):
        console.log('case 2 ran');
        break;
    case (num > 5):
        console.log('case 3 ran');
    default: 
        console.log ('did not work');

}