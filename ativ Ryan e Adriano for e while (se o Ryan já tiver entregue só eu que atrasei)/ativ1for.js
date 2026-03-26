//desculpa mesmo peo atraso, o Ryan provaveçmente tinha terminado a tempo, só eu que atrasei
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
for (let i = 1; i < num; i++) {
    numR = numR * numA
    numA -= 1
}
console.log(numR)