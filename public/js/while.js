//Create a while loop that uses console.log() to create the output shown below.

var x = 1;
while (x < 65536) {

x= x * 2;
console.log(x);

}


//This is how you get a random number between 50 and 100

var allCones = Math.floor(Math.random() * 50) + 50;
console.log("You must sell " + allCones + " today");

// This is how you get a random number between 1 and 5
 
while (allCones>0) {
 	var conesOrdered = Math.floor(Math.random() * 5) + 1;
 	console.log("they bought " + conesOrdered + " cones");
 	allCones = allCones - conesOrdered;
 	console.log(allCones);
}
	if (allCones<=0) {
		console.log("Yay! I sold them all!");
}