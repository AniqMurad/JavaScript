const character = [
{
    name: 'tarak mehta',
    height: '172',
    mass: '77',
    eye_color: 'brown',
    gender: 'male',
},
{
    name: 'jethalal',
    height: '145',
    mass: '136',
    eye_color: 'black',
    gender: 'male',
},
{
    name: 'babita ji',
    height: '150',
    mass: '49',
    eye_color: 'grey',
    gender: 'female',
},
{
    name: 'krishnan iyer',
    height: '168',
    mass: '84',
    eye_color: 'black',
    gender: 'male',
},
];

//get an array of all names
const names = character.map(ch => ch.name);
console.log(names); 

//get an array of objects with just name and height properties
const propertiesOfCharactters = character.map(ch => {
    return {
        name: ch.name,
        height: ch.height
    }
})

console.log(propertiesOfCharactters);

//get the total height of all characters
//reduce method

const totalHeight = character.reduce((previousHeight,character) => {
    return previousHeight + Number(character.height); 
},0);

console.log(totalHeight);

//get characters with mass greater than 100
//filter method

const greaterThanMass = character.filter((character) => {
    return character.mass > 100;
})

console.log(greaterThanMass);

//get all male characters
//filter method

const MaleCharacters = character.filter ((character) => {
    return character.gender == 'male';
})

console.log(MaleCharacters);

//sort by name
//sort method

const sortByName = character.sort ((character1,character2) => {
    if (character1.name < character2.name){
        return -1;
    }
    if (character1.name > character2.name){
        return 2;
    } 
    return 0;
})
console.log(sortByName);

//sort by gender
//find and replace with ctrlR

const sortByGender = character.sort ((character1,character2) => {
    if (character1.gender < character2.gender){
        return -1;
    }
    if (character1.gender > character2.gender){
        return 2;
    } 
    return 0;
})
console.log(sortByGender);

//does every character have mass more than 40?
//every object

console.log(character.every((character)=>{
    return character.mass >40;
}))

//does every charcter have blue eyes?

console.log(character.every((character)=>{
    return character.eye_color == 'blue';
}))

//is there atleast one male character?
//some method

console.log(character.some((character) =>{
    return character.gender;
}))


//is there any character that is taller than 200?

console.log(character.some((character) =>{
    return character.height >200;
}))