import inquirer from "inquire";


let question = [
    {
        type: 'input',
        name: "dist",
        mesage: "digite distância percorrida"
    },
    {
        type: 'input',
        name: "cap",
        mesage: "digite capacidade do tanque"  
    }
]
let resp = await inquirer.prompt(question)
let distancia = parseInt(resp.dist)
let capacidade = parseInt(resp.cap)
let gasto = (distancia / capacidade)

if (gasto<10) {
    console.log (gasto + " Não econômico")
} else {
    console.log (gasto + " econômico")
}
