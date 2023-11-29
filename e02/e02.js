const numbers = [1,2,3,4];
console.log(numbers);

numbers.push(5);
console.log(numbers);

numbers.unshift(0);
console.log(numbers);

numbers.splice(2,1);
console.log(numbers);

console.log(numbers.indexOf(3));

let string = numbers.join(',');
console.log(string);

let subarray = numbers.slice(1,2);
console.log(subarray);

numbers.forEach(m => {
        console.log(m);
});
