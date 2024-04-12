#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1,
    PKR: 277.83,
    GBP: 0.80,
    SAR: 3.75,
    EUR: 0.94,
};
let convertor = await inquirer.prompt([
    { name: "from",
        message: "Enter from currency: ",
        type: "list",
        choices: ["USD", "PKR", "GBP", "SAR", "EUR"] },
    { name: "to",
        message: "Enter to currency: ",
        type: "list",
        choices: ["USD", "PKR", "GBP", "SAR", "EUR"] },
    { name: "amount",
        message: "Enter your Amount: ",
        type: "number"
    }
]);
let fromAmount = currency[convertor.from];
let toAmount = currency[convertor.to];
let baseamount = convertor.amount / fromAmount;
let finalAmount = baseamount * toAmount;
console.log(chalk.green.bold(`Your converted amount is ${finalAmount.toFixed(2)}`));
