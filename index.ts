#!/usr/bin/env node
import inquirer from "inquirer";

const randomNumber= Math.floor(Math.random()* 10 + 1);
const answer=await inquirer.prompt([
    {name:"UserGuessedNumber",
    type:"number",
    message:"Kindly Guessed a number between 1 - 6 "
}
]);
if (answer.UserGuessedNumber === randomNumber){
    console.log("Congratulations! Dear Player You Guessed the Correct Number.Thanks for Playing.")
}else{
    console.log("Sorry! You guessed Wrong Number Thanks for playing.")
};

