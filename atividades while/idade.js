import inquirer from "inquirer";
let questions = inquirer.prompt ([
    {
        type: 'input',
        name: "primeiro",
        message: "digite idade do aluno"
    },
    {
        type: 'input',
        name: "segundo",
        message: "digite idade do aluno"
    },
    {
        type: 'input',
        name: "terceiro",
        message: "digite idade do aluno"
    },
    {
        type: 'input',
        name: "quarto",
        message: "digite idade do aluno"
    },
    {
        type: 'input',
        name: "quinto",
        message: "digite idade do aluno"
    }
])

let resp = await questions

const idade1 = parseFloat(resp.idade1)
const idade2 = parseFloat(resp.idade2)
const idade3 = parseFloat(resp.idade3)
const idade4 = parseFloat(resp.idade4)
const idade5 = parseFloat(resp.idade5)
const idades = [idade1, idade2, idade3, idade4, idade5]
let a = 0
while (a <= 4) {
    if (idades[a] <= 17) {
        console.log("menor de idade")
    } else {
        console.log("${idades[a]} é maior de idade")
    }
    a += 1
}
