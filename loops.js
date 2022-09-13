/* for (let i = 0; i < 10; i++){
    console.log("happy birthday")
} */

/*
for (let i= 5; i<=50; i = i+5) {
    console.log(i)
}

for (let j=50; j>=5; j=j-5){
    console.log(j)
}

for (let k=0; k<=10; k++){
    if (k%2 == 0)
    console.log(k)
    else (k)
}

for (let z= 0; z<10; z++) {
    console.log(z)
} 
*/

/* 

let i= 0;
while(i<=10){
    console.log("hello")
    i++
}

let j=0;
do{
    console.log("hi")
    j++ 
}
while(j<10)

*/

let animal = {
    name: "zebra",
    leg: 4
};

//console.log (animal.name)
//console.log (animal["name"])
//for in loop wrt objects
for (let key in animal ){
    console.log(key, animal[key]);
}

//wrt arrays
let names = ["rahul","neha","aman","rishab"];
for(let index in names){
    console.log(index, names[index])

}

//for of loop wrt arrays

for (let name of names){
    console.log(name)
}