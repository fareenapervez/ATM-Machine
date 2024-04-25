#! /usr/bin/env node
import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

// initializing user balance and pin code
let myBalance= 70000;
let myPin= 8765;

// prinitng welcome message
console.log("Welcome to Bank of Women -ATM Machine");

let pinAnswer= await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message:  "Please Enter Your Pin"
}
])
if(pinAnswer.pin===myPin){
    console.log("Your Pin is correct, login succesfully!!!");
    // console.log(`Your Account balance is ${myBalance}`);
    let operationAns = await inquirer.prompt([
        {
            name: "Operation",
            type: "list",
            message: "Select an operation:",
            choices: ["WithDraw Amount","Check Balance"]
        }
    ]);
    if(operationAns.Operation==="WithDraw Amount"){
        let amountAns=await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                Message: "Enter the amount to WithDraw"
            }
        ])
        if(amountAns.amount>myBalance){
            console.log("Insufficient Balance");
        }
        else{
            myBalance -=amountAns.amount;
            console.log(`${amountAns.amount} withdraw succesfully`);
            console.log(`Your Remaining account Balnce is ${myBalance}`);
        }
    }
    else if(operationAns.Operation==="Check Balance"){
        console.log(`your Balance is ${myBalance}`);
    }
}
else{
    console.log("Pin is incorrect, try again!;")
}

