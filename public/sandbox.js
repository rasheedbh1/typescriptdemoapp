"use strict";
const y = "Hello I am Rasheed and I am using typescript";
let age = 36.9;
const circ = (diameter) => {
    return diameter * Math.PI;
};
circ(7);
let names = ['Rasheed', 'Nina', 'Berta', 'Cloudy'];
names.forEach(name => {
    name = name + "Bou Hamdan ";
    name.substring(0, 5);
    console.log(name);
});
//creating an object in ts
let myObject = {
    name: 'Rasheed',
    age: 22,
    occupation: 'Junior Software Engineer',
    knowledge: ['HTML', 'CSS', 'C#', 'JavaScript', "TypeScript"],
    experience: {
        firstJob: {
            companyName: 'Holy Create',
            startedAt: 28 / 8 / 2020,
            endedAt: 16 / 5 / 2022,
            type: "Freelance"
        },
        secondJob: {
            companyName: 'Asteya',
            startedAt: 16 / 5 / 2022,
            endedAt: 'Present',
            type: "Full-time"
        }
    }
};
//creating an array that can store various types 
let mixed = [];
mixed.push(54, 'rasheed', 88.3, '12hasd');
// assigning a variable to the type of Function
let greet;
greet = () => {
    console.log("Hello");
};
//this function contains an optional parameter meaning that we can call the function without passing it and it won't produce any errors
const add = (a, b, c) => {
    return a + b;
};
// result will be of type number because it infers the return type of the function 
let result = add(7, 10);
// Function signature 
let printString;
printString = (firstname, lastname) => {
    console.log(`${firstname} ${lastname}`);
};
// we interact with the DOM the same way we would do with JS 
// we can use the ! symbol at the end of the declration statement 
//to tell TS that we are certain that this element exists
const anchor = document.querySelector('a');
// GENERICS
// const addUID = (obj: object) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }
// const addUID = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40, height: 140 });
//let docTwo = addUID('shaun');
console.log(docOne.name);
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'Rasheed' }
};
const docFour = {
    uid: 1,
    resourceName: 'shoppingList',
    data: ['bread', 'milk']
};
console.log(docThree, docFour);
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
})(ResourceType || (ResourceType = {}));
;
const docFive = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'The Power of Now' }
};
const docSix = {
    uid: 10,
    resourceType: ResourceType.AUTHOR,
    data: { title: 'Echkart Tolle' }
};
console.log(docFive);
console.log(docSix);
//tuples
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];
let tup = ['ryu', 25, true];
// tup[0] = false;
tup[0] = 'ken';
let student;
student = ['john', 23564];
