"use strict";

//TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should return a message that says hello to the passed in name.


function sayHello(name) {
    return "Hello, " + name + "!";
    }
console.log(sayHello("codeup"));

//TODO:
//  Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
//  Store the result of the function call in a variable named 'helloMessage'.
//  console.log 'helloMessage' to check your work
//


var myNameIs = "Memo";
var helloMessage = sayHello(myNameIs); 
console.log(helloMessage);


//TODO:
// Don't modify the following line, it generates a random number between 1 and
// 100 and stores it in a variable named random
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to return a message.
// The message should contain the number being checked, and whether or not the
// number is odd
// Example
//  > isOdd(42) // returns "42 is not odd!"
//
// Call the function 'isOdd' passing the variable 'random' as a parameter.
// console.log *outside of the function* to check your work


var random = Math.floor((Math.random() * 100) + 1);
function isOdd(number) {
    if (random % 2 === 0) {
        return (random + " Your number is even!");
    } else {
        return (random + " Your number is odd!")
    }
}
console.log(isOdd(42));


//TODO: Create a function named 'calculateTip' to calculate a tip on a bill at a
// restaurant
//
// The function should accept a tip percentage and the total of the bill, and
// return the amount to tip
// Example
//  > calculateTip(0.20, 20) // returns 4


var tipPercent;
var amountTotal;

function calculateTip(tipPercent, amountTotal) {
return tipPercent * amountTotal
}
    console.log(calculateTip(0.20, 20));


//TODO: Use prompt and alert in combination with your calculateTip function to
//  prompt the user for the bill total and a percentage they would like to tip,
//  then display the dollar amount they should tip


var userPercent= prompt("how much would you like to tip?");
var userBill= prompt("what is your total?");
alert ("Your tip amount is " + calculateTip(userPercent, userBill));














