/*
For In Loops
*/


let student = {
    name: 'Peter',
    awesome: true,
    degree: 'JavaScript',
    week: 1
}

for (let item in student) {
    console.log(item);
}

for (let in student) {
    console.log(item);
    console.log(student[item]);
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll']

for (let cat in catArray) {
    console.log(cat);
}

let name = sPongeBoB;
let capName;

for (let index in name) {
    console.log(index)
    if (index == 0) {
        capName = name [index].toUpperCase();
    } else {
        capName += name[index].toUpperCase();

    }

}

console.log(capName);