import * as dotenv from "dotenv"; 
import promptSync from "prompt-sync";

const prompt = promptSync();

dotenv.config();

let tries = 0;

const number = process.env.NUMBER;

const guess = prompt("Enter a number between 1 through 20: ");

export function outoftries()
{
    // After three tries, it will give you a message
    console.log("Sorry, you've got ran out of tries.");
}

if (guess == number)
{
    console.log("That's right! But, how did you guess it?");
    
    // It will prompt to ask an answer
    const answer = prompt("Enter an answer: ");
    console.log("Thanks for asking the question!");
} else {
    console.log("Incorrect number. Please try again.");
    tries = tries + 1;

    const guess = prompt("Enter a number between 1 through 20: ");

    if (guess == number)
    {
        console.log("That's right! But, how did you guess it?");
        
        // It will prompt to ask an answer
        const answer = prompt("Enter an answer: ");
        console.log("Thanks for asking the question!");
    } 
    else
    {
        console.log("Incorrect number. Please try again.");
        tries = tries + 1;
    
        const guess = prompt("Enter a number between 1 through 20: ");

        if (guess == number)
        {
            console.log("That's right! But, how did you guess it?");
            
            // It will prompt to ask an answer
            const answer = prompt("Enter an answer: ");
            console.log("Thanks for asking the question!");
        } 
        else
        {
            tries = tries + 1;
            outoftries();
        }
    }
}
