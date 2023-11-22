function whoPaying(names) {
    // Create a variable as names and enter names,
  var names = ["James", "Alice", "Arun", "Manu", "Sinu", "Jose"];
//   Length of array
  var numberOfPeople = names.length;
//   To find random position
  var randomPosition = Math.floor(Math.random() * numberOfPeople);
//   find out random person
  var randomPerson = names[randomPosition];

  return randomPerson + " is buing lunch today";
}
