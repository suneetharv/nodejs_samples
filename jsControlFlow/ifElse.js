/*

*/
const prompt = require("prompt-sync")();
const score = Number(prompt("Please enter the score : "));
//const score = 95;

if(score > 35){
    console.log("Passed the examination");
    if (score >=90)
       console.log("Grade A") ;
    else if (score >=80)
       console.log("Grade B") ;
    else 
       console.log("Grade C") 
}
else{
    console.log("Failed the examination");
}
