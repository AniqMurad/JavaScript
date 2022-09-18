
/* let lecture = 10;
let section = 3;
let title = 'JavaScript';

const course = {
    lecture: 10,
    section: 3,
    title: 'JavaScript',
    notes: {
        introduction: "Welcome to JS course"
    },
    enroll() {
        console.log('you are successfully enrolled');
    }
}


course.enroll() */
/* console.log(course.title) */
/* console.log(course) 

course.price = 999 */

// factory function

// function createCourse(title) {
//  return {
/* lecture: 10,
section: 3,
*/
//   title: title, 
/* notes: {
    introduction: "Welcome to JS course"
}, */
/*  enroll() {
     console.log('you are successfully enrolled');
 }
}
}

const course = createCourse('JavaScript');
course.enroll()
console.log(course) */


function createCourse(title) {
    return {

        title: title,
        enroll() {
            console.log('you are successfully enrolled');
        }
    }
}

const newCourse = createCourse('JavaScript');
//constructor function
/*
function Course(title) {
    this.title = title,
    this.enroll = function () {
        console.log('you are successfully enrolled');
    }
}

const course = new Course('JavaScript');
delete course.title;
course.checkEnrollment = function(){
    console.log('30 users are enrolled');
}*/
/* course.enroll()

console.log(course);

*/

function Course(title) {
    this.title = title,
        this.enroll = function () {
            console.log('you are successfully enrolled');
        }
}
/* 
const course = new Course ('JavaScript');
console.log(course.constructor)
console.log(newCourse.constructor)
*/

const Course_1 = new Function('title', `
this.title = title,
this.enroll = function () {
    console.log('you are successfully enrolled');
}
`) 
/*
const course_2 = new Course_1('JavaScript');
course_2.enroll(); */

//primitive Data type
let number = 10;
//pass by value
let number_2 = number;
number = 15;

/*
console.log(number);
console.log(number_2);
*/
//reference data type
let obj = {number : 10};
//pass by reference
let obj2 = obj;

obj.number = 15; 
/*
console.log(obj);
console.log(obj2);
*/
 
const course = {

    title: 'JavaScript',
    enroll() {
        console.log('you are successfully enrolled');
    }
}

/*
const course_1 = {...course}
course;
course_1;

course_1.title = "C++";

course;
course_1;
*/


// const course_1 = Object.assign({},course)
// course_1.title = 'C++';
/*
course;
course_1;
*/

// for in loop 
/*
for(let key in course){
    console.log(key, course[key]);
}
*/

//for off loop
const course_1 = {};
for (let key of Object.keys(course)){
    // console.log(key,course[key])
    course_1[key] = course[key];
}

course
course_1