#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let randomNumber = Math.floor(Math.random() * 4);

console.log(chalk.bold.blue("***Welcome in GUESSING NUMBERS GAME***"));
console.log(chalk.bold.yellow("**Round 1**"));

let ask = await inquirer.prompt({
    name: "number",
    type: "number",
    message: "Please choose a number between 1 to 3..."
});

if (ask.number === randomNumber) {
    console.log(chalk.bold.italic.green("Congratulations! Correct Answer"));
    console.log(chalk.bold.yellow("**Round 2**"));

    let ask2 = await inquirer.prompt({
        name: "number",
        type: "number",
        message: "Please choose a number between 1 to 5..."
    });

    let randomNumber2 = Math.floor(Math.random() * 6);

    if (ask2.number === randomNumber2) {
        console.log(chalk.bold.italic.green("Congratulations! Correct Answer"));
        console.log(chalk.bold.yellow("**Round 3**"));

        let ask3 = await inquirer.prompt({
            name: "number",
            type: "number",
            message: "Please choose a number between 1 to 10..."
        });

        let randomNumber3 = Math.floor(Math.random() * 11);

        if (ask3.number === randomNumber3) {
            console.log(chalk.bold.italic.green("Congratulations! You Win"));
        } else {
            console.log(chalk.bold.italic.red("You loose! Better luck next time"));
        }
    } else {
        console.log(chalk.bold.italic.red("You loose! Better luck next time"));
    }
} else {
    console.log(chalk.bold.italic.red("You loose! Better luck next time"));
}
