SayHello();
console.log(i);
//calling before giving the value is hoisting because memory is allocated

var SayHello = function (){
    console.log("hello");
}

let i=10;

SayHello();
console.log(i);