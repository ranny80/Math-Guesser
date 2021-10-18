import * as dotenv from "dotenv";

const prompt = require("prompt-sync")();

dotenv.config();

let tries = 0;

const number = process.env.NUMBER;

const guess = prompt("Enter a number between 1 through 20: ", number);

export function outoftries() {
    console.log("Sorry, you've got ran out of tries.");
}

if (guess == process.env.NUMBER) {
    console.log("That's right! But, how did you guess it?");
    const answer = prompt("Enter an answer: ");
    console.log("Thanks for asking the question!");
} else {
    console.log("Incorrect number. Please try again.");
    tries = tries + 1;

    const guess = prompt("Enter a number between 1 through 20: ", number);

    if (guess == process.env.NUMBER) {
        console.log("That's right! But, how did you guess it?");
        const answer = prompt("Enter an answer: ");
        console.log("Thanks for asking the question!");
    } else {
        console.log("Incorrect number. Please try again.");
        tries = tries + 1;
    
        const guess = prompt("Enter a number between 1 through 20: ", number);

        if (guess == process.env.NUMBER) {
            console.log("That's right! But, how did you guess it?");
            const answer = prompt("Enter an answer: ");
            console.log("Thanks for asking the question!");
        } else {
            tries = tries + 1;
            outoftries();
        }
    }
}
