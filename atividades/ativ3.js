import inquirer from "inquire";


let question = [
    {
        type: 'input',
        name: "peso",
        mesage: "digite peso"
    },
    {
        type: 'input',
        name: "altura",
        mesage: "digite altura"  
    }
]
let resp = await inquirer.prompt(question)

let peso = parseInt(resp.peso)
let altura = parseInt(resp.altura)
let imc = (peso / altura*altura)

if (imc<18,5) {
    console.log (imc + " Excesso de magressa")
} else {
    if (imc<25) {
        console.log (imc + " Peso normal")
    } else {
        if (imc<30) {
            console.log (imc + " Excesso de peso")
        } else {
            if (imc<35) {
                console.log (imc + " Obesidade (grau 1)")
            } else {
                if (imc<=40) {
                    console.log (imc + " Obesidade grau 2")
                } else {
                    console.log (imc + " Obesidade grau 3")
                }
            }
        }
    }
}