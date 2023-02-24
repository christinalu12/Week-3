//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93]; //declaring array
console.log(ages);//making sure array works
let first = ages[0]; 
let last = ages[ages.length - 1]; //retrieving elements 
let answer = last - first; //subtracting elements retrieved
console.log(answer); //printing answer 90

//1.b add new age to array
ages.push(33); //pushing new element
console.log(ages); //making sure new element added
let newFirst = ages[0]; 
let newLast = ages[ages.length - 1]; //retrieving elements 
let newAnswer = newLast - newFirst; //subtracting elements retrieved
console.log(newAnswer); //printing answer 30
 
//1.c use loop to iterate through and calculate average
let sum = 0; //setting inital sum to 0 
for(let i = 0; i < ages.length; i++){
    sum = sum + ages[i];
} //creating a for loop to find the sum of all the ages and iterate through array
let average = sum / ages.length; // finding the average
console.log(average); //printing average 
