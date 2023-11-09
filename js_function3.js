function getMilk(money) {
  //Creating a function with name as getMilk and give parameter as money...
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveRight");
  var numberOfBottles = money / 2;
  console.log("buy " + Math.floor(numberOfBottles) + " bottle of milk");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  //Declare return for get output from inside of the function
  return numberOfBottles;
}

var result = Math.round(getMilk(5)); // Storing the value from getMilk function in a Variable
console.log(result);
