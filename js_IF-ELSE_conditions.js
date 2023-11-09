prompt("What is your name . .?? ");
prompt("What is your Lover's name. . ??");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
alert("Your Love Score is : " + loveScore + "% .");

// If Else Statements-

// Conditional statements are used to perform different actions based on different conditions.

// 1) Use if to specify a block of code to be executed, if a specified condition is true
// 2)Use else to specify a block of code to be executed, if the same condition is false

if (loveScore < 70) {
  alert("Your Love Score is : " + loveScore + "% .");
  if (loveScore > 50) {
    alert("Average");
  }
} else {
  alert("Great");
}
