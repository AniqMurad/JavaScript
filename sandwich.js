let bread1 = prompt("which bread you would like to have:- ");
let veggies1 = prompt("what are your favorite veggies:- ");
let sauce1 = prompt("what sauce would you like to have:- ");

function sandwich(bread, veggies, sauce){
    let sandwich= 
    bread + " bread "
    + veggies + " "
    +sauce + " sandwich is ready ";
    return sandwich;
}

let vegsandwich = sandwich(bread1, veggies1, sauce1);
console.log (vegsandwich);