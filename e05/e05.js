const employee = JSON.stringify({
    firstName: "John",
    lastName: "Smith",
    age: 34,
    position: "Developer",
        
})

const person = JSON.parse(employee);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.position);

const employees = [
    JSON.stringify({firstName: "Kate", lastName: "Black", age: 24, position: "Intern",}),
    JSON.stringify({firstName: "Mark", lastName: "Dayn", age: 55, position: "CEO",}),
    JSON.stringify({firstName: "Ben", lastName: "Snow", age: 67, position: "Accountant",})
] 


let listEmploy = [];
for(let i = 0; i<employees.length; i++) {
    listEmploy[i]=JSON.parse(employees[i]);
}

const senior = listEmploy.filter((a) => a.age > 40);
console.log(senior);

const employeePositions = listEmploy.map(a => a.position);
console.log(employeePositions);

const totalAge = listEmploy.reduce((acc, employee) => acc + employee.age, 0);
const averageAge = totalAge / listEmploy.length;

console.log(averageAge);
