let name = prompt("What is your name?:");
let char = name.slice(0, 2);
let caps = char.toUpperCase();
let rest = name.slice(2, name.length);
rest = rest.toLowerCase();

alert("Your name is : " + caps + rest);
