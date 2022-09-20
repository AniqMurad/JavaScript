const num = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(num[num.length - 1]);

//push

//num.push(10);
console.log(num.push(10));

//unshift

//num.unshift(0);
console.log(num.unshift(0));

//pop

//num.pop();
console.log(num.pop());

//shift

//num.shift();
console.log(num.shift());

//changing index of first number from 0 to 10
num[0] = 10;
console.log(num);

//new file //index off method
const names = ['aniq', 'murad', 'natha', 'hell', 'no', 'bro', 'aniq'];
//names.indexOf('aniq');
console.log(names.indexOf('aniq', 1)); //aniq is at index 0 but the system wont proceed more to the idex 6 where aniq is repeating so after aniq at index 0 we will write 1 so that the system continues to check after index 0 where aniq lies.

//last index off
console.log(names.lastIndexOf('aniq'));

//includes
names.includes('aniq'); //aniq is in the names so its true
names.includes('murad',2); // system will check from index 2 so murad is not in the names after index 2 so the output will be false

console.log(names.includes('aniqi'));

//new array, what if theres a object in an array?
let channels = [{
    name: 'apna college',
    subscribers: 10000
    },
    {
        name: 'apni kaksha',
        subscribers: 420
    },
    {
        name: 'aniq murad',
        subscribers: 991
    }
];

/* console.log(channels.includes({
    name: 'apna college',
    subscribers: 10000
    })); //output will come false but the situation is true so we will use find method because includes works in premitive data type not in reference data type
*/

//find method

console.log (channels.find(function(elements){
    //return elements.subscribers === 10000
    return elements.name === 'aniq murad'
}))

console.log (channels.find((element) => {
    return element.name === 'aniq murad'
}))

//another command for the last command if we have single running config
/*
console.log (channels.find(element => element.name === 'aniq murad'));
*/

//concat method
let names1 = ['aniq', 'murad', 'j']
let names2 = ['natha','alwani']

//console.log (names1.concat(names2)); concat method output

//let names3 = names1.concat(names2)

//slice method
//console.log (names3.slice(1,4)); //in slice method before index 1 and with index 4 values will be cancel value 1 2 and 3 will be shown in output

//joining 2 arrays with spread operator
let names3 = [...names1,...names2]
console.log(names3)



//for loop
for (let i=0; i<names.length; i++){
    console.log(names[i])
}

//for off loop
for (let name of names){
    console.log(name)
}

//for each loop
names.forEach(function(name,index){
    console.log(name,index);
})

//join
let student = ['A','N','I','Q','M','N']
//console.log(student.join('')); //this empty space is a space between them to remove commas and give output as a name
student = student.join('_');

//split
console.log(student.split('_'))



let cities = [
    {name: 'karachi',population:1000000},
    {name: 'lahore',population:500000},
    {name: 'islamabad',population:300000},
    {name: 'punjab',population:700000},
    {name: 'balochistan',population:100000}
];

//arrow function not call back because array is new

console.log(cities.filter(city => {
    return city.population > 300000
}))

//one more tariqa
// console.log(cities.filter(city => city.population > 300000))


//map function is giving output of doubling the populations which we have operated.
console.log(cities.map(city => city.population * 2))
