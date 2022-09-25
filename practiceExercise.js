//exercise 1
let square = {
    side: 5,
    get area() {
        return this.side ** 2
        //return this.side * this.side
    }
}

square.side = 10;
console.log(square.area);

//exercise 2
function stringConcat(separator, ...strings) {
    let returnVal = ''
    strings.forEach((string, i) => {
        if (i == strings.length - 1) {
            returnVal += string;
        }
        else {
            returnVal += string + separator;
        }


    })
    return returnVal;
}
console.log(stringConcat('+', 'this', 'is', 'invalid'));

//exercise 3
arr = [1, 2, 3, 4, 5, 6, 7, 8]
// normal method
/*
let fisrt = arr[0];
let second = arr[1];
let third = arr[2];
let others = arr.slice(3);
*/

//destructuring arrays
let [fisrt, second, third, ...others] = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(fisrt);
console.log(second);
console.log(third);
console.log(others);

//exercise 4
//match stick exercise 1 house is 6 sticks, 2 is 11, 3 is 16
function matchHouses(houseNumber) {
    if (houseNumber <= 0) {
        return 0;
    }
    else {
        return houseNumber * 6 - houseNumber + 1;
        //return (houseNumber * 6) - (houseNumber -1);
    }
}

console.log(matchHouses(-1));
console.log(matchHouses(0));
console.log(matchHouses(1));
console.log(matchHouses(4));
console.log(matchHouses(87));