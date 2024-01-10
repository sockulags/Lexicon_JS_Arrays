# Exercise - Arrays

### Input
```js
const numbers = [2,6,12,7,22,35];
const initialState = numbers;
```

## Exercise 1
#### Create a variable where you store the first element of the numbers array. Log it to the console.
```js
let firstElement = numbers[0];
console.log(firstElement); //Output: 2
```
## Exercise 2
#### Create a variable where you store the last element of the numbers array. Log it to the console.
```js
let lastElement = numbers.slice(-1);
console.log(lastElement) //Output: [ 35 ]
lastElement = numbers[numbers.length -1];
console.log(lastElement); //Output: 35
```
## Exercise 3
#### Create a variable where you store the fourth element of the numbers array. Log it to the console.
```js
let fourthElement = numbers[4-1];
console.log(fourthElement); //Output 7
```
## Exercise 4
#### Store the second and the fifth element of the numbers array in variables. Create a new array and populate it with those two variables. Log it to the console.
```js
let secondElement = numbers[2-1];
let fifthElement = numbers[5-1];
const newNumbers = [secondElement, fifthElement];
console.log(newNumbers) //Output: [ 6, 22 ]
const altNumbers = [numbers[1], numbers[4]]
console.log(altNumbers) //Output: [ 6, 22 ]
```
## Exercise 5
#### What is the length of the numbers array? Use the correct array property to save that number to a variable and log it to the console.
```js
let numbersLength = numbers.length;
console.log(numbersLength); //Output: 6
```
## Exercise 6
#### Add an arbitrary number to the end of the numbers array with the correct array method. This array method returns a value. Save that to a variable and log it to the console. What does this number represent?
```js
let value = numbers.push(23);
console.log(value) //Output: 7
// value represents the new length of the array
```
## Exercise 7
#### Add an arbitrary number to the start of the numbers array using the correct array method. This method also returns a value. Log it to the console and reflect on what this value means.
```js
let nextValue = numbers.unshift(3);
console.log(nextValue)  //Output: 8
// nextValue represents the new length of the array
```
## Exercise 8
#### By now the numbers array should have been modified a couple of times. Let's shrink it again. Remove the last element from the array with an array method. This method should return a value as well. Log it to the console as see what it is.
```js
let shrinkArray = numbers.pop();
console.log(shrinkArray) //Output: 23
// array.pop() returns the last item in array and returns it's value
```
## Exercise 9
#### Do the same as the last one, but remove it from the beginning instead. Log the return value to the console.
```js
let shrinkArrayAgain = numbers.shift();
console.log(shrinkArrayAgain) //Output: 3
// array.shift removes the first item in the array and returns it's value
```
## Exercise 10
#### If we have done the last couple of exercises correctly, we should have the same content as the default array. Log it out the console and see for yourself.
```js
console.log(numbers, initialState) 
if(numbers === initialState)(
console.log("The numbers array is the same as the intital array as expected")
)
else(
    console.log("Something went wrong along the way.")
)
/*Output: 
[ 2, 6, 12, 7, 22, 35 ] [ 2, 6, 12, 7, 22, 35 ]
The numbers array is the same as the intital array, as expected
*/
```
