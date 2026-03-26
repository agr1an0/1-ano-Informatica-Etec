//entrada de dados
let numerosEntrada = document.querySelectorAll('.numeros')
const reesult = document.getElementById('result')
let x
let y
let z
let numerosSaida = [x, y , z]
let resultado
let auxiliar = 0
//fim da entrada de dados

//avisos
alert("coloque o primeiro numero")
function aviso2() {
    alert("coloque o segundo numero")
}
function aviso3() {
    alert("coloque o terceiro numero (opcional)")
}
//fim dos avisos

//recebar valores e mostrar resultados
function pegarValores() {
    for (let i = 0; i <= 2; i++) {
        if (parseFloat(numerosEntrada[i].value) || numerosEntrada[i].value == '0') {
            numerosSaida[auxiliar] = parseFloat(numerosEntrada[i].value)
            auxiliar += 1
        }
    }
    auxiliar = 0
}
function mostrarResultado() {
    if (numerosSaida[1] == undefined && numerosSaida[2] == undefined) {
        alert("numeros invalidos ou insuficientes")
    } else {
        alert(resultado)
        reesult.innerText = resultado
    }
    numerosSaida = [x, y, z]
}
//fim dos valores e resultados
//botões
function soma() {
    pegarValores()
    resultado = numerosSaida[0] + numerosSaida[1]
    if (numerosSaida[2]) {
        resultado += numerosSaida[2]
    }
    mostrarResultado()
}
function subtracao() {
    pegarValores()
    resultado = numerosSaida[0] - numerosSaida[1] 
    if (numerosSaida[2]) {
        resultado -= numerosSaida[2]
    }
    mostrarResultado()
}
function divisao() {
    pegarValores()
    resultado = (numerosSaida[0] / numerosSaida[1])
    if (numerosSaida[2]) {
        resultado /= numerosSaida[2]
    }
    mostrarResultado()
}
function multiplicacao() {
    pegarValores()
    resultado = numerosSaida[0] * numerosSaida[1]
    if (numerosSaida[2]) {
        resultado *= numerosSaida[2]
    } 
    mostrarResultado()
}
//fim dos botões