
const numbers = [2,6,12,7,22,35];
const initialState = numbers;

let firstElement = numbers[0];
console.log(firstElement); 

let lastElement = numbers.slice(-1);
console.log(lastElement)
lastElement = numbers[numbers.length -1];
console.log(lastElement); 

let fourthElement = numbers[4-1];
console.log(fourthElement);

let secondElement = numbers[2-1];
let fifthElement = numbers[5-1];
const newNumbers = [secondElement, fifthElement];
console.log(newNumbers) 
const altNumbers = [numbers[1], numbers[4]]
console.log(altNumbers) 

let numbersLength = numbers.length;
console.log(numbersLength); 

let value = numbers.push(23);
console.log(value) 

let nextValue = numbers.unshift(3);
console.log(nextValue)  

let shrinkArray = numbers.pop();
console.log(shrinkArray) 
let shrinkArrayAgain = numbers.shift();
console.log(shrinkArrayAgain) 

console.log(numbers, initialState) 
if(numbers === initialState)(
console.log("The numbers array is the same as the intital array as expected")
)
else(
    console.log("Something went wrong along the way.")
)
