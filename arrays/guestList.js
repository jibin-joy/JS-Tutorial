const guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
const guestName = prompt("What is your name ??");
if (guestList.includes(guestName)) {
  alert("Welcome to Party");
} else {
  alert("Sorry, Better luck next time..");
}
