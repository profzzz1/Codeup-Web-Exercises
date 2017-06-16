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

// output should match this pattern
 // 1
 // 22
 // 333
 // 4444
 // 55555
 // 666666
 // 7777777
 // 88888888
 // 999999999
 // 0000000000
 var stringNumber;
 
 for(var i = 1; i <= 10; i++) {
     stringNumber = i.toString();
 
     stringNumber = stringNumber.substr(stringNumber.length -1);
     
     console.log(stringNumber.repeat(i));
 }
 
 
 for(var i = 100; i >= 5; i = i - 5) {
     console.log(i);
 } 