/*

DOCUMENT OBJECT MODEDL

    - DOM STANDS FOR DOCUMENT OBJECT MODEL, AND IT IS WHAT ALLOW OUR JAVASCRIPT TO INTERACT WITH THE HTML AND CSS OF OUR WEBPAGE. THE DOCUMENT OBJECT MODEL SPECIFIES HOW BROWERS SHOULD CREATE A MODEL OF AN HTML PAGE AND HOW JAVASCRIPT CAN ACCESS AND UPDATE THE CONTENTS OF A WEB PAGE OF A WEB PAGE WHILE IT'S IN THE BROWSER WINDOW
    -THE DOM IS AN OBJECT-ORIENTED REPRESENTATION OF A WEB PAGE, WHICH CAN BE MODIFIED WITH A SCRIPTING LANGUAGE LIKE JAVASCRIPT.
    THE DOM COVERS TWO PRIMARY AREAS:

        1. MAKING A MODEL OF AN HTML PAGE
            -WHEN THE BROWSER LOAD A WEBPAGE, IT CREATES A MODEL OF THE PAGE IN MEMORY
            -THE DOM SPECIFIES THE WAY IN WHICH THE BROWSER SHOULD STRUCTURE THE MODEL IN WHAT IS CALLED THE DOME TREE
                -EACH OBJECT REPRESENTS A DIFFERENAT PART OF THE WEBPAGE THAT IS LOADED IN THE BROWSER WINDOW
        2. ACCESS AND CHANGING TAGS AND DATA IN THE HTML PAGE
            -THE DOM PROVIDES METHODS AND PROPERTIES TO ACCESS AND UPDATE EACH OBJECT IN THE MODEL, WHICH IN TURN UPDATES WHAT THE USER SEES IN THE BROWSER
    - while working with the DOM tree, we generally access the element  want to work with, and once that element (or elements) have been selected, we can then manipulate them
            ACCESSING:
                COMMON METHODS FOR ACCESSING A SINGLE ELEMENT
                    - getElementById()
                    - querySelector()
                COMMON METHODS FOR ACCESSING MULTIPLE ELEMENTS:
                    - querySelectorAll()
                    - getElementsByClassName()
                    - getElementsByTagName()
            MANIPULATING
                COMMON METHODS FOR WORKING WITH HTML CONTENT
                    - innerHTML
                    - textContent
                    - createElement
                COMMON METHODS FOR WORKING WITH TAG ATTRIBUTES
                    - className / id
                    - setAttribute()
                    - getAttribute()    
*/      



//Test
let x = 10;
console.log(x);

//2. getElementById()
document.getElementById('testParagraph').style.color = 'blue';

let testParaph = document.getElementById('testParagraph');
console.log(testParaph);

testParaph.style.color = 'red';

// getElementById() grabs the first HTML element wqith the specified value - so if we want 2 elements

//3. querySelector() - guerySelectorAll() - innerText & innerHTML

console.log(document.querySelector('p.sampleClass'));
let allPargraphs = document.querySelectorAll('p.sampleClass');

let allParagraphs = document.querySelectorAll('p.sampleClass'); // querySelectorAll() returns a nodelist containing all elements that match the specified group of selectors. Nodelist objects are collections of nodes, and nodes are simply just various items in the HTML document itself like tags, text, etc.
console.log(allParagraphs);

allParagraphs[0].innerText = 'My text has changed!'; // since querySelectorAll() returns a nodelist (array) of all of the specified elements, we can access a specific indice from that array, and change the value
allParagraphs.forEach(pTag => {
    // pTag.innerText = 'My text has changed using a forEach() method!';
    // pTag.textContent = 'My text has changed using a forEach() method!';
    pTag.innerHTML = '<i>My text has changed using a forEach() method!</i>';
})
/*

 INNERTEXT vs INNERHTML vs TEXTCONTENT
        - innerText simply references or allows us to change the text of a specified element or elements. Will only return visible text in a 'node'.
        - textContent does the same thing that innerText does, but will return the FULL text of a 'node'.
        - innerHTML allows us to set text, as well as HTML elements. Those HTML elements will be nested inside of the current HTML element that was referenced.
*/
// 3.5 TEXTCONTENT vs INNERTEXT EXAMPLE
console.log(document.getElementById('spanTest').innerText);
console.log(document.getElementById('spanTest').textContent);
// 4. AddEventListener() - click
// console.log(myButton);
// myButton.addEventListener('click', clicked => {
    //     console.log(clicked);
    //     clicked.target.style.backgroundColor = 'blue';
    // })
    // myButton.addEventListener('click', function(clicked) {
        // })
/*
************
CHALLENGE
************
- make the button toggle between red and blue when clicked
*/
let myButton = document.getElementById('clickThisButton');
myButton.addEventListener('click', event => {
    console.log(event);
    if (event.target.style.backgroundColor == 'red') {
        event.target.style.backgroundColor = 'blue';
    } else {
        event.target.style.backgroundColor = 'red';
    }
})
// 5. AddEventListener() - keyup - getElementsByTagName()
let myInput = document.getElementById('nameInput');
console.log(myInput);
myInput.addEventListener('keyup', ev => {
    // console.log(ev.target.value);
    // console.log(document.getElementsByTagName('p'));
    let pTags = document.getElementsByTagName('p');
    pTags[0].innerText = 'Something Changed!';
    if (ev.target.value == '') {
        pTags[1].innerText = 'NOTHING HAS BEEN TYPED!';
    } else {
        pTags[1].innerText = `Everyone, say hello to ${ev.target.value}!`
    }
})






console.log[0].innerText = 'My text has changed!';//

allPargraphs.forEach(pTag => {
    pTag.innerText=
})