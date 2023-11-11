var number = prompt("Enter a year to find out is it a leap year or not ??");
// If it is divisible by 4, then it would be a Leap year, then again put in if statement for ..
if (number % 4 === 0) {
  // This is for checking is it divisible by 100 without any reminder. and if yes, it is not Leap year, then put it in another If statement..
  if (number % 100 === 0) {
    if (number % 400 === 0) {
      // This is to check, whether it is cleanely divisible by 400, If yes then it is a Leap, else it is Not a Leap year..
      alert("Leap");
    } else {
      alert("Not leap year");
    }
  } else {
    alert("Leap");
  }
} else {
  alert("Not leap year");
}
