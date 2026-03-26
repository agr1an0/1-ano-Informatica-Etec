import inquirer from "inquire";


let question = [
    {
        type: 'input',
        name: "nasc",
        mesage: "digite ano de nascimento"
    },
    {
        type: 'input',
        name: "atual",
        mesage: "digite ano atual"  
    }
]
let resp = await inquirer.prompt(question)

let anoNasc = parseInt (resp.nasc)
let anoAtual = parseInt (resp.atual)

let idade = (anoAtual - anoNasc)

if (idade<10) {
    console.log (idade + " criança")
}
else {
    if (idade<18) {
        console.log (idade + " adolescente")
    } 
    else {
        if (idade<60) {
            console.log (idade + " adulto")
        } else {
            console.log (idade + " idoso")
        }
    }
}