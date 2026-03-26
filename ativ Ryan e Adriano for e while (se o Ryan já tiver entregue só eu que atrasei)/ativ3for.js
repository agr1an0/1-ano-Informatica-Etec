import inquirer from 'inquirer'
let question = inquirer.prompt([
    {
        type: 'input',
        name: 'numero',
        message: "digite numero"
    }
])
let resp = await question
let num = resp.numero
let numAnt = 1
let numAtual = numAnt
let numProx = 0

for (let i = 1; i <= num; i++) {
    numProx = numAnt + numAtual
    numAnt = numProx - numAtual
    console.log(numAnt)
    numAnt = numAtual
    numAtual = numProx
}