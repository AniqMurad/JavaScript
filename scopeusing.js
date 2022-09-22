/*blet foo = 'bar';
var bar = 'foo';

if (true){
    let foo = 'baz';
    var bar = 'foobar';
    console.log(foo);
    console.log (bar);
}
console.log(foo);
console.log (bar);
*/

//shadowing
/*
let foo = 'bar';
var bar = 'foo';

function SayHello(){
    let foo = 'baz';
    var bar = 'foobar';
    console.log(foo);
    console.log (bar);
}
SayHello();
console.log(foo);
console.log (bar);
*/

//illegal shadowing
/*
let foo = 'bar';
var bar = 'foo';

if (true){
    var foo = 'baz'; //if we use var, foo is already declared in let so we cant use it which is illegal shadowing
    var bar = 'foobar';
    console.log(foo);
    console.log (bar);
}
console.log(foo);
console.log (bar);
*/

let foo 
var bar 
const baz = 20;
