// Declare an empty array
var output = [];
// Start counting through a variable..
var count = 1;
// Create a function as name fizzBuzz.
function fizzBuzz() {
  // count = prompt("Enter a number");
  // output.push(count);

  //   Conditional Statement-
  if (count % 3 == 0) {
    // Check it is divisible/ Multiply by 3, if yes say "fizz"
    output.push("Fizz");
    // Check it is divisible/ Multiply by 5, if yes say "Buzz"
  } else if (count % 5 == 0) {
    output.push("Buzz");
  } else {
    // If neither 3 ("fizz") nor 5 ("Buzz"), print the number..
    output.push(count);
  }
  console.log(output);
  //   Increment operator, for generating numbers
  count++;
}
