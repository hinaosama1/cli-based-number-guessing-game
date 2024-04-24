#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const RandomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([{
        name: "userguessnumber",
        type: "number",
        message: "please guess a number between 1-10: ",
    }]);
if (answers.userguessnumber === RandomNumber) {
    console.log(chalk.blue(`congratulations! you guessed right number`));
}
else {
    console.log(chalk.yellow(`you guessed wrong number`));
}
;
