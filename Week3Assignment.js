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

//2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; //declaring array
console.log(names); //making sure it works

//2.a Use a loop to iterate through and calculate average number of letters per name
let newSum = 0;
for (let i = 0; i < names.length; i++){
    newSum = newSum + names[i].length;
} //creating a for loop
let newAverage = newSum / names.length; //finding average
console.log(newAverage); //printing answer

//2.b Use a loop to iterate through the array again and concatenate all the names together, separated by spaces
let namesTogether = ""; // to initialize empty string
for (let i = 0; i < names.length; i++) {
    namesTogether += names[i] + " ";
}
console.log(namesTogether);

/* 5. Create a new array called nameLengths and write a loop to iterate
over the previously crated names array. Add the length of each name
to the nameLengths array
*/
let nameLengths = []; //create empty array
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length); //push the lengths of names to new array
} //write for loop
console.log(nameLengths);

/* 6. Write a loop to iterate over the nameLengths array and calculate 
the sum of all the elements in the array. 
*/
for (i = 0; i < nameLengths; i++){ //write a for loop
    sum += nameLengths[i]; //define sum
}
console.log(sum); //print

/* 7. Write a function that takes two parameters, word and n, as arguments
 and returns the word concatenated to itself n number of times.
 */
function myFunction(word, n){ //delcare function
    let myWord = ""; // created empty string
    for (let i = 0; i <n; i++){ //for loop to concat parameters
        myWord += word;
    }
    return myWord; 
}
console.log(myFunction("Hello", 3)); //call function to check

// 8. Write a function w/ 2 parameteres (firstName, lastName), returns fullName.
function fullName (firstName, lastName){ //write function with return statement
    return firstName + " " + lastName;
}
console.log(fullName("Christina", "Lujan")); //call to check

//9. Write a function that takes an array of nums and returns average

function numbersSum(numbers){ //name function and parameters
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){ //use for loop to iterate
        sum += numbers[i];//use to find sum of elements
    }
    return sum > 100 // return to find value
} console.log("true")// console true if value is greater than 100
console.log(numbersSum([5, 67, 89]));// call function to check