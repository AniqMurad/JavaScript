
// the scope is by default global
// var name = 'Aniq';

//global scope
/*
function sayName(){
    var marks = 10;
    console.log(name);
}
sayName()
console.log(marks);
*/
var x = 0;

function first() {
    //local scope  #1
    var x = 1;
    console.log(x);
    function childOfFirst() {
        var x = 2;
        console.log(x);
        //local scope #2
    }
    childOfFirst()
}
first()

//global scope
function second() {
    console.log(x);
    //local scope #3
}
//global scope
second();

//block scope

var y = 10;
{
    var y = 1;
    console.log(y);
}
console.log(y);

if (true){
    //this 'if' conditional block doesn't create a new scope
    var foo = 'bar';
}
console.log(foo);

//lexical scope

function dada(){
    var name = 'J.Natha';
    //likes os mptp accessible here
    function daddy(){
        console.log(name);
        //name is accessible here
        //like is not accessible here
        function mai(){
            //innermost level of the scope chain
            //name is also accessible here
            var likes = 'coding';
        }
        console.log(likes);
        mai();
    }
    daddy();
}
dada();