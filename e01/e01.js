let person = {
    name: "",
    age: 0, 
    gender: "", 
    location: "",
}

person.name = "Alice";
person.age = 30;
person.gender = "female";
person.location = "New York";

console.log(person.name);
console.log(person.age);
console.log(person.gender);
console.log(person.location);

console.log(person['name']);
console.log(person['age']);
console.log(person['gender']);
console.log(person['location']);

for (let key in person) {
    console.log(key);
}


function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

let myCar = new Car("Ford", "Mustang", 1969);

console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.year);

for (let key in myCar) {
    console.log(key);
}


/*

arrayOfObjects.forEach(
    (obj) => {
        console.log(obj);
        console.log(obj.job);
    }

)

1. Create an object literal called person with the following properties: name, age, gender, location.
    - Use dot notation to set value of the properties to Alice, 30, female, New York.
    - Use dot notation and log the value of each property to the console.
    - Use bracket notation to access and log the value of each property to the console.
    - Use a for...in loop to iterate over the properties of the person object and log the property names to the console.
    
2. Create a constructor function called Car that takes three parameters: make, model, and year.
    - Use the constructor function to create a new car object called myCar with the values "Ford", "Mustang", and 1969.
    - Use dot notation to access and log the value of each property of myCar to the console.
    - Use a for...in loop to iterate over the properties of the myCar object and log the property names to the console.

    */