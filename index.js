#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.italic.bgMagenta.bold.underline.bgBlackBright(" \t\t\t Welcome to the typescript Quiz by Usman Naseem\t\t\t"));
console.log(chalk.italic.bold.underline.bgBlackBright("\n \t\t\t\tEach question carry 1 point⭐ \n \t\t\t\t"));
const quiz = await inquirer.prompt([
    {
        name: "question1",
        type: "list",
        message: chalk.italic.bold.bgMagenta("Q1: What is TypeScript?"),
        choices: ["A) A Superset Of Javascript",
            "B) A Tex formatting Language",
            "C) A type Of Database",
            "D) A web Server"]
    },
    {
        name: "question2",
        type: "list",
        message: chalk.italic.bold.magenta("Q2: Which Commands is used to install Typescipt Globally?"),
        choices: ["A) npm install typescipt",
            "B) npm install -g typescipt",
            "C) npm add typescipt",
            "D) npm get typecript"]
    },
    {
        name: "question3",
        type: "list",
        message: chalk.italic.bold.magenta("Q3: Which Keyword is used to define a variable in Typescipt ?"),
        choices: ["A) Var ",
            "B) let?",
            "C) Const",
            "D) All of the Above"]
    },
    {
        name: "question4",
        type: "list",
        message: chalk.italic.bold.magenta("Q4: Which of the following method use to add the new value in last of the array"),
        choices: ["Unshift", "splice", "slice", "push"]
    },
    {
        name: "question5",
        type: "list",
        message: chalk.italic.bold.magenta("Q5: What is the purpose of the tsconfig.json file"),
        choices: ["A) Interfaces can be used to define the structure of an object ",
            "B) Interfaces can be used to define function types ",
            "C) Interfaces can be implemented by classes",
            "D) All of the above"]
    },
    {
        name: "question6",
        type: "list",
        message: chalk.italic.bold.magenta("Q6: JSON stand for:"),
        choices: ["Javascript object notation", "Java standard object notation", "JSON object notation", "Joint online notation"]
    },
    {
        name: "question7",
        type: "list",
        message: chalk.italic.bold.magenta("Q7: Which Typescipt features allows you to specify default values for function parameters: :"),
        choices: ["A) Optional Parameters",
            "B) Rest Parameters",
            "C) Default Parameters ",
            "D) Named Parameters"]
    },
    {
        name: "question8",
        type: "list",
        message: chalk.italic.bold.magenta("Q8: How do you donate in Typescipt :"),
        choices: ["A) [string , number]",
            "B) {string , number}",
            "C) (string , number)",
            "D) <string , number>"
        ]
    }, {
        name: "question9",
        type: "list",
        message: chalk.italic.bold.magenta("Q9: How do you define an enum in Typescipt: :"),
        choices: ["A) enum color {Red, Green, Blue}",
            "B)  enum color = {Red, Green, Blue}",
            "C)  enum color (Red, Green, Blue) ",
            "D)  enum color <Red, Green, Blue>"]
    }, {
        name: "question10",
        type: "list",
        message: chalk.italic.bold.magenta("Q10: Which Keyword is used to export a function from a module in Typescript: :"),
        choices: ["A) global",
            "B) public",
            "C) module ",
            "D) export"]
    }
]);
let score = 0;
switch (quiz.question1) {
    case "A) A Superset Of Javascript":
        console.log(chalk.italic.bold.green("Correct ✅"));
        ++score;
        break;
    default:
        console.log(chalk.italic.bold.red("Incorrect ❌"));
}
switch (quiz.question2) {
    case "B) npm install -g typescipt":
        console.log(chalk.italic.bold.green("Correct ✅"));
        ++score;
        break;
    default:
        console.log(chalk.italic.bold.red("Incorrect ❌"));
}
switch (quiz.question3) {
    case "D) All of the Above":
        console.log(chalk.italic.bold.green("Correct ✅"));
        ++score;
        break;
    default:
        console.log(chalk.italic.bold.red("Correct ❌"));
}
switch (quiz.question4) {
    case "push":
        console.log(chalk.italic.bold.green("Correct ✅"));
        ++score;
        break;
    default:
        console.log(chalk.italic.bold.red("Incorrect ❌"));
}
switch (quiz.question5) {
    case "D) All of the above":
        console.log(chalk.italic.bold.green("Correct ✅"));
        ++score;
        break;
    default:
        console.log(chalk.italic.bold.red("Incorrect ❌"));
}
switch (quiz.question6) {
    case "Javascript object notation":
        console.log(chalk.italic.bold.green("Correct ✅"));
        ++score;
        break;
    default:
        console.log(chalk.italic.bold.red("Incorrect ❌"));
}
switch (quiz.question7) {
    case "C) Default Parameters ":
        console.log(chalk.italic.bold.green("Correct ✅"));
        ++score;
        break;
    default:
        console.log(chalk.italic.bold.red("Incorrect ❌"));
}
switch (quiz.question8) {
    case "A) [string , number]":
        console.log(chalk.italic.bold.green("Correct ✅"));
        ++score;
        break;
    default:
        console.log(chalk.italic.bold.red("Incorrect ❌"));
}
switch (quiz.question9) {
    case "A) enum color {Red, Green, Blue}":
        console.log(chalk.italic.bold.green("Correct ✅"));
        ++score;
        break;
    default:
        console.log(chalk.italic.bold.red("Incorrect ❌"));
}
switch (quiz.question10) {
    case "D) export":
        console.log(chalk.italic.bold.green("Correct ✅"));
        ++score;
        break;
    default:
        console.log(chalk.italic.bold.red("Incorrect ❌"));
}
console.log(chalk.italic.underline.grey(`Score: ${score}`));
