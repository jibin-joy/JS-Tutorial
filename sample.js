var name = prompt("What is your name..??");
var capName = name.slice(0, 2);
var toUpper = capName.toUpperCase();
var rest = name.slice(2, name.length).toLowerCase();
var final = "Your name is " + toUpper + rest + ".";
alert(final);

function hey() {
  var name = "Jibin";
  var age = 29;
}
hey();
alert("Hello " + name + "You are " + age + "years old");
