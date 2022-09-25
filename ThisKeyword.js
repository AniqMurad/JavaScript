/*
let counter = {
    count: 0,
    increment: function (){
        counter.count++;
    }
}
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter);
*/

/*
let counter = cretaeCounter();
let counter1 = cretaeCounter();
function cretaeCounter(){
    return{
        count: 0,
        increment: function(){
            this.count++;
            console.log(this);
        }
    }
}
counter1.increment();
counter.increment();


var count= 0;
function incrementCounter(counter){
    this.count++;
    console.log(this);
}
incrementCounter();
incrementCounter();
incrementCounter();
incrementCounter();*/
console.log(this);


function Car(name){
    this.name = name;
    this.start = function(){
        console.log(this.name + ' started');
        console.log(this);
    }
}

let swift =  Car('swift');
//swift.start();
console.log(name);