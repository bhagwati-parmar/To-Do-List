#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let ToDoList = [];
let condition = true;
console.log(chalk.magentaBright.bold('\n \t WELCOME To CodeWithBhagwati - To Do List \n'));
while (condition) {
    let addtask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.yellowBright("enter your new task :")
        }
    ]);
    ToDoList.push(addtask.task);
    console.log(chalk.greenBright(`${addtask.task} * added in your task !`));
    let addMoreTask = await inquirer.prompt([
        {
            name: "addMore",
            type: "confirm",
            message: chalk.greenBright("do you want to add more tasks ?"),
            default: "false"
        }
    ]);
    condition = addMoreTask.addMore;
}
console.log("\n\tyour updated ToDoList :", ToDoList);
