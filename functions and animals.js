
let animal = {
    name: "Cow",
    legs: 4
}

console.log(animal);
//dot notation
console.log(animal.name);
//bracket notation
console.log(animal["name"]);

//using bracket notation when needed
let legsproperty = "legs"
console.log(animal[legsproperty]);

//arrays
let selectBooks = ["The Rudest Book Ever", "Think And Grow Rich", "Invisible Man"];
console.log(selectBooks[2])
console.log(selectBooks)
console.log(selectBooks.length)

//functions
function aniqmurad(){
    console.log("hello aniq here");

}

aniqmurad();

function helloWorld(name, lastname){
    console.log("hello" + name +" " +lastname);
}
helloWorld(" aniq", "Murad");
helloWorld(" sharyar", "aniq")


function addition(a,b){
    return a+b;
}
console.log(addition(5,5));