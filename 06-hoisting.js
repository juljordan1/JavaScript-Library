// Var
var x = 12;

function varTest() {
    var x = 33;
    if (1 == 1) {
        var x = 45;
        console.log(x); //
    }
    console.log(x); //
}

varTest ();
console.log(x); // 12

//--------------------

// LET

let y = 12;

function letTest() {
    var y = 33;
    if (true) {
        let y =45;
        console.log(y); //

    }

}

console .log(name);
let name ='Zach';

myFunction();

function myfunction(){
console.log('I have been hoisted');
}

