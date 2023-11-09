// Love Calculator using Math.random() method..
prompt("What is your name : ??"); //Ask users to enter their name
prompt("Enter your Lover's Name : ??"); // And their crush's or partner's name..

var loveCalc = Math.random() * 100; //Just generate a random number and multiply it with 100(to calculate in percentage)
loveCalc = Math.floor(loveCalc) + 1; // U Will get number b/w 0-99, and floor it to round downward and add 1 to range it from 0 - 100..
alert("Your Love Score is " + loveCalc + " %.");
