import inquirer from 'inquirer';
let question = inquirer.prompt([
    {
        type: 'input',
        name: 'base',
        message: "digite base",
    },
    {
        type: 'input',
        name: 'expoente',
        message: "digite expoente",
    }
])
let resp = await question;
let num = resp.base;
let numA = resp.expoente;
let numB = num;
let i = 1
while (i < numA) {
    i++
    numB =+ numB * num
    console.log(numB)
}