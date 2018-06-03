//Challenge #1

// When I first set out to solve this assignement I came up with the following:
// I thought I would try a do loop as it was certain that the first console log was "#" 
// I quickly realized that this printed out the actual array and not just the content.
var hashy = ["#"];
var i = 1;

do {
  console.log(hashy)
  hashy.push("#");
  i++;
}

while (i < 8)


// So then I looked up how to print out just the content of the array and came up with the following:
// This time using a for loop and push another hash to the array and then using the .join to printout just the content. 

var hash = ["#"];
for (var i = 1; i < 8; i++) {
  var str = hash.join("");
  console.log(str)
  hash.push("#");
}


// I decided to ask my hushand (20yr+ software developer) if he thought my way above was a good solution.
// He indicated that it was a great use of the for loop but was more complex then it needed to be.
// The below solution uses way less resources and is simplier to read.
// I found this to be a very good exercise.

var h = "#";

for (var i = 1; i <= 7; i++ ) {
  console.log(h);
  h = h + "#";
}


// Challenge #2

function isEven(num) {
  if (num % 2  == 0) {
    console.log("The number is even")
  } else if (num % 2 > 0) {
    console.log("This number is odd")
  } else {
    console.log("This is not a number")
  }
}

isEven(1);
isEven(2);
isEven("a");

// Decided to use an if/else statement.  
// 1. Using first the modulo operator to decipher if the num provided is even.  It will divide by 2
//    and if the remaining is 0 this will be a true statement and
//    this will prompt the console log to print "The number is even"
// 2. If the first if statement is false it will then go to the else if 
//    with this modulo operator anything with a remainder of anything
//    above zero will be consider true statement and the console.log 
//    will print "This number is odd"
// 3. If the else if statement is false it will go to the else where 
//    everything else that is not a numbr will log ("This is not a number").