const y = "Hello I am Rasheed and I am using typescript";

let age: number = 36.9;

const circ = (diameter: number) => {
 return diameter * Math.PI;
}

circ(7);

let names = ['Rasheed', 'Nina', 'Berta', 'Cloudy'];
 
names.forEach(name => {
    name = name + "Bou Hamdan ";
    name.substring(0,5);
    console.log(name);
})

//creating an object in ts
let myObject = {
    name: 'Rasheed',
    age: 22,
    occupation: 'Junior Software Engineer',
    knowledge: ['HTML', 'CSS', 'C#', 'JavaScript', "TypeScript"],
    experience: {
        firstJob: {
            companyName: 'Holy Create',
            startedAt: 28/8/2020,
            endedAt: 16/5/2022,
            type: "Freelance"
        },
        secondJob: {
            companyName:  'Asteya',
            startedAt: 16/5/2022,
            endedAt: 'Present',
            type: "Full-time"
        }   
    }
}

//creating an array that can store various types 
let mixed: (string|number)[] = [];
mixed.push(54,'rasheed', 88.3,'12hasd');

// assigning a variable to the type of Function
let greet:Function;

greet = () => {
    console.log("Hello");
}

//this function contains an optional parameter meaning that we can call the function without passing it and it won't produce any errors
const add = (a: number,b: number, c?: number|string) => {
    return a+b;
}

// result will be of type number because it infers the return type of the function 
let result = add(7,10);


// Function signature 

let printString: (a:string,b:string) => void;

printString = (firstname: string, lastname: string ) =>{
    console.log(`${firstname} ${lastname}`  )
}

// we interact with the DOM the same way we would do with JS 
// we can use the ! symbol at the end of the declration statement 
//to tell TS that we are certain that this element exists
const anchor = document.querySelector('a')!;


// GENERICS

// const addUID = (obj: object) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

// const addUID = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
  }
  
  let docOne = addUID({name: 'yoshi', age: 40, height: 140});
  //let docTwo = addUID('shaun');
  
  console.log(docOne.name);
  
  // with interfaces
  interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
  }
  
  const docThree: Resource<object> = {
    uid: 1, 
    resourceName: 'person', 
    data: { name: 'Rasheed' }
  };
  
  const docFour: Resource<string[]> = {
    uid: 1, 
    resourceName: 'shoppingList', 
    data: ['bread', 'milk']
  };
  
  console.log(docThree, docFour);


// ENUMS

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR };

interface ResourceTwo<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docFive: ResourceTwo<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: 'The Power of Now' }
}
const docSix: ResourceTwo<object> = {
  uid: 10,
  resourceType: ResourceType.AUTHOR,
  data: { title: 'Echkart Tolle' }
}

console.log(docFive);
console.log(docSix);

//tuples
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true];
// tup[0] = false;
tup[0] = 'ken';

let student: [string, number];
student = ['john', 23564];
