var number = prompt("Enter a number between 1 and 10");

for (var i = 1; i <=10; i++){
	console.log(number + "x" + i + "=" + number * i );
}

for (var i = 1; i <= 10; i++){
	var numbers = Math.floor(Math.random() * 180) + 20;
	if (numbers % 2 === 0) {
		console.log("Your number is even" + numbers)
		console.log("Your number is odd" + numbers)
	}
}