import inquirer from 'inquirer';
let questions = inquirer.prompt([
    {
        type: 'input',
        name: "nota",
        message: "digite numero"
    }
])
let resp = await questions
const nota = parseFloat(resp.nota)
let mult = 0

while (mult <= 10) {
    let resultado = (nota * mult)
    if (isNaN(nota)) {
        mult = 11
        console.log("Numero invalido")
    } else {
        console.log(resultado)
        mult += 1
    }}
       