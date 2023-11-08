// This programme includes 1) Length of String, 2) Slice String, 3) ToUpperCase, 4) toLowerCase, 5) Concatenation etcc..

// 1)Create a var that stores the name that enters via prompt.
var namee = prompt("What is your name ??:");

// 2) Capitalise the first letter of their name.
// (a) Isolate the first char
var firstChar = namee.slice(0, 1);

//() b) Turn the first letter of character to Uppercase
var upperCaseFirstChar = firstChar.toUpperCase();

// (c) Isolate the rest of name
var restOfName = namee.slice(1, namee.length);

// (d) If user types some/ full capital letters, to avoid that.
var restOfName = restOfName.toLowerCase();

// (e) Concatenate the rest of the characters with first capital
var capitalisedName = upperCaseFirstChar + restOfName;

// 3) Use the capitalised version of the input name to greet them using alert..
alert("Hello " + capitalisedName);
