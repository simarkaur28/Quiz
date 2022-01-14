var readlineSync = require('readline-sync');
//const chalk = require('chalk');
var score=0;
/*function checkans(question,ans){
  if (ans==question)
{
  console.log("Right answer!");
  score++;
}
else{
  console.log("Wrong answer:(");
}
console.log("Your score is "+score);
return ans;
};
var name=readlineSync.question('What is your name?\n');
console.log("Welcome to the Quiz, "+name)
var answer= checkans(ans,"Simar");
var last=readlineSync.question('What is your last name?\n');
var answer= checkans(last,"Kaur");*/

function checkAns(userans,rightans){
  if(userans==rightans)
  {console.log("Correct answer! :))")
  score++;
  }
  else
  console.log("Wrong answer:(");

  console.log("Your current score is "+score);
  return rightans;
  };
  var name=readlineSync.question('Enter your name?\n');
console.log("Welcome to the Quiz, "+name+".");
  console.log("Check your Knowledge!\n\n(Note: Enter the correct option number.) ");
  console.log("Q.1 Which is the largest State of India?\nOption 1.Rajasthan\nOption 2.Maharashtra\nOption 3.Madhya Pradesh");
var userans= readlineSync.question("Answer:");
checkAns(userans,"1")

console.log("Q.2 Which continent has the highest population density?\nOption 1.North America\nOption 2.Asia\nOption 3.South America"); 
var userans= readlineSync.question("Answer:");
checkAns(userans,"Asia");

console.log("Q.3 Is Chennai a metropolitan city?\nOption 1.Yes\nOption 2.No");  
var userans= readlineSync.question("Answer:");
checkAns(userans,"yes");

console.log("\nYour final score is "+score+"/3");
