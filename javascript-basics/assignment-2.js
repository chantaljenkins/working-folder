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

