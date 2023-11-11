function bmiCalc(weight, height) {
  var bmi = weight / Math.pow(height, 2); //(height * height)
  return bmi;
}
var bmi = bmiCalc(80, 2.5);
alert("your BMI is " + Math.round(bmi) + ".");
