/*
1. Create an object called `person` with the following properties:
    - firstName
    - lastName
    - age
    - occupation
    
2. Write a function called `getPersonInfo` that takes an object as an argument and logs the information about the person to the console.
    
3. Create an array of objects called `people`, with at least 3 objects that represent different people.
    
4. Use the `forEach` method to iterate over the `people` array and call the `getPersonInfo` method for each person.
    
5. Use the `map` method to create a new array called `fullNames` which contains the full name of all the people in the `people` array.
    
6. Write a function called `sortByAge` that takes an array of objects as an argument and returns a new array sorted by the age of the objects in ascending order.
*/

let person = {
    firstName: "",
    lastName: "",
    age: 0,
    occupation: "",
}

function getPersonInfo(object) {
    console.log(`Name: ${object.firstName} ${object.lastName}, Age: ${object.age}, Occupation: ${object.occupation}`);
}

let people = [
    {
        firstName: "Jenny",
        lastName: "Smith",
        age: 30,
        occupation: "Teacher",
    },
    {
        firstName: "Dawn",
        lastName: "Jones",
        age: 44,
        occupation: "Journalist",
    },
    {
        firstName: "Mike",
        lastName: "Brown",
        age: 23,
        occupation: "Student",
    },
]

people.forEach ( 
    x => {
        getPersonInfo(x);
    }

)

const fullNames = people.map(person => `${person.firstName} ${person.lastName}`);
console.log(fullNames);

function sortByAge(x) {
 return x.slice().sort((a,b) => a.age-b.age);
}
console.log(sortByAge(people));
