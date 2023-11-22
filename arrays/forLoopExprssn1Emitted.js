var output = [];
// Declared Starting / Expression 1 here.
var count = 1;
function FizzBuzz() {
    // Expression(Start) omitted in this for loop..
  for (; count <= 100; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
  }
  console.log(output);
}
