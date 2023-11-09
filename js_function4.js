function getMilk(money){
    console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveRight");
  // var numberOfBottles = money / 2;
    // Here cost of bottle is considered as 1.5..
  console.log("buy " + calcBottles(money, 1.5) + " bottle of milk");
    // console.log("You will get change of " + change(money, 1.5))
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
    return calcChange (money,1.5);
    
}
// Creating another function for calculate How much bottles we will get with the entered money
function calcBottles(startingMoney, moneyPerBottle){
    var numberOfBottles = Math.floor(startingMoney/moneyPerBottle);
    return numberOfBottles;
}
// Creating another function for calculate How much of balance amount we will get with the entered money.
function calcChange(startingAmount, moneyPerBottle){
    var change = startingAmount % moneyPerBottle;
    return change;
}

console.log("You will get change of " + getMilk(5));