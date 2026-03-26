import inquirer from "inquire";


let question = [
    {
        type: 'input',
        name: "salario",
        mesage: "digite salario"
    }
]
let resp = await inquirer.prompt(question)
let salario = parseInt(resp.salario)