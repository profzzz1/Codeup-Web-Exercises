if (color === "red") {
	console.log("Roses are red");
} else if (color === "orange") {
	console.log("orange you glad I didnt say banana.");
} else if (color === "yellow") {
	console.log("Watch out where the huskies go and dont eat that yellow snow.");
} else if (color === "green") {
	console.log("Green is the color of kale.");
} else if (color === "blue") {
	console.log("Blue roses are blue.");
} else {
	console.log("I dont know anything about that color.");
}

switch(color) {
		case "Red":
			console.log("Roses are red");
			break;
		case "orange":
			console.log("orange you glad I didnt say banana.");
			break;
		case "yellow":
			console.log("Watch out where the huskies go and dont eat that yellow snow.");
			break;
		case "green":
			console.log("Green is the color of kale.");
			break;
		case "blue":
			console.log("Blue roses are blue.");
			break;
		default:
			console.log("I dont know anything about that color.")
			break;
	}

	/*

		HEB Discount

	*/

var cameron = 180;
var ryan = 250;
var george = 320;
var discountedAmount;
var finalTotal;

if (cameron > 200) {
	discountedAmount = cameron * .1;
	finalTotal = cameron - discountedAmount;
	console.lof("Cameron got a discount on " + cameron + " of " + discountedAmount);
	console.lof("Cameron got a discount on " + cameron + " of " + discountedAmount);
} else {
	console.log("Cameron paid " + cameron + " and did not have a discount");
	finalTotal = cameron
}


if (ryan > 200) {
	discountedAmount = ryan * .1;
	finalTotal = ryan - discountedAmount;
	console.lof("Ryan got a discount on " + ryan + " of " + discountedAmount);
} else {
	console.log("Ryan paid " + ryan + " and did not have a discount");
	finalTotal = Ryan
}

if (george > 200) {
	discountedAmount = george * .1;
	finalTotal = george - discountedAmount;
	console.lof("George got a discount on " + george + " of " + discountedAmount);
} else {
	console.log("George paid " + george + " and did not have a discount");
	finalTotal = george
}



// flip a coin

var flipaCoin = Math.floor(Math.random()* 2);

console.log(flipACoin === 1) {
	console.log("Buy a house!");
} else {
	console.log("Buy a car!");
}

var outcome = (flipACoin === 1) ? "Buy a house!" : "Buy a car!";

console.log(outcome);


//Each customer given randomly generated number between 0 and 6

var luckyNumber = Math.floor(Math.random() * 6);
var subtotal = 60;
var discount = 0;
var newTotal;

console.log(luckyNumber);


switch(luckyNumber) {

	case 0:
		console.log("No discount");
		discount
	case 1:
		console.log("You get a 10 percent discount");
		discount = .1;
	case 2:
		console.log("You get a 25 percent discount");
		discount = .25;
	case 4:
		console.log("You get a 50 percent discount");
		discount = .5;
	case 5:
		console.log("You get a 100 percent discount");
		discount = 1.0;
		break;
	default:
		console.log("No lucky number disount");
}



newTotal = subtotal - (subtotal * discount);
console.log("Your final total after discount is " new+ newTotal)


// using prompt
/*Write some JavaScript that uses a confirm dialog to ask the user if they would like to enter a number. If they click 'Ok', prompt the user for a number, then use 3 separate alerts to tell the user:
whether the number is even or odd
what the number plus 100 is
if the number is negative or positive
*/

var proceed = confirm("Would you like to enter a number?");

if (proceed) {

	var number = prompt("Please enter a number.");

	if (isNan(parseFloat(number))){
		console.log("Not a valid number.")
	} else {
		if (number % 2 === 0) {
			alert("Your number is even.");
		} else {
			alert("Your number is odd.")
		}

		alert("Your number plus 100 is " + (number + 100));

		if (number < 0) {
			console.log(number + " is negative");
		} else {
			console.log(number + " is positive");
		}
	}


} else {
	console.log("Another time then...");
}








