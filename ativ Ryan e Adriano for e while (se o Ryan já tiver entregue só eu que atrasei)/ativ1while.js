import inquirer from 'inquirer';
let question = inquirer.prompt([
    {
        type: 'input',
        name: 'numero',
        message: "digite numero",
    }
])
let resp = await question;
let num = resp.numero;
let numA = num - 1
let numR = num
let i = 1
while (i < num) {
    i++
    numR = numR * numA
    numA -= 1
}
console.log(numR)