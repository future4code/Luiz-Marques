//EXERCICIOS DE INTERPRETAÇÃO DE CODIGO

//Exercicio 01:
//a) vai imprimir no console 10 e 50
//b) Não vai imprimir nada no console

//Exercicio 02:
//a) Serve para dizer se dentro do texto digitado pelo usuario existe a palavra cenoura, transformando todo texto digitado em letra
//minuscula para não ter conflito.
//b) 1 - true    2 - true    3 - true

//EXERCICIO DE ESCRITA DE CODIGO
//Exercicio 01:


 function texto() {
	console.log("Eu sou Luiz, tenho 27 anos, moro no Rio de Janeiro e sou Analista de infra.")
}

texto()

function inserirDados(){
const nome = ("Olivia")
const idade = Number(6)
const cidade = ("Rio de janeiro")
const profissão = ("vira-lata profissional")

console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`)
}

inserirDados()

//Exericio 02:
//a)
function calcSoma(num1, num2){
    const soma = num1 + num2
    console.log("Resultado", soma)
}

calcSoma(5, 6)
calcSoma(1, 8)
calcSoma(9, 45)

//b)
function calcBooleano(num3, num4){
const verificar = num3 >= num4
console.log("Resultado", verificar)

}

calcBooleano(5, 8)
calcBooleano(10, 1)
calcBooleano(4,113)
calcBooleano(145, 142)

//c) 
function verificarPar(num5){
const par = num5 % 2 === 0
console.log("Resultado", par)
}

verificarPar(80)
verificarPar(15)
verificarPar(12)
verificarPar(2)

//d)
function escreverMsg(){
const msg = prompt("Digite uma frase")
console.log(msg.toLowerCase(), "Tamanho da STRING:", msg.length)
}

escreverMsg()

//Exercicio 03
let inserirNum1 =Number(prompt("Digite um numero"))
let inserirNum2 =Number(prompt("Digite outro numero"))
console.log("Numeros inseridos:", inserirNum1, inserirNum2)


function digSoma(inserirNum1, inserirNum2){
const resultadoSoma = inserirNum1 + inserirNum2
console.log("Soma", resultadoSoma)
}

digSoma(inserirNum1, inserirNum2)

function digSubt(inserirNum1, inserirNum2){
const resultadoSubt = inserirNum1 - inserirNum2
console.log("Diferença", resultadoSubt)
    
}

digSubt(inserirNum1, inserirNum2)

function digMult(inserirNum1, inserirNum2){
const resultadoMult = inserirNum1 * inserirNum2
console.log("Multiplicação", resultadoMult)    

}

digMult(inserirNum1, inserirNum2)

function digDiv(inserirNum1, inserirNum2){
const resultadoDiv = inserirNum1 / inserirNum2
console.log("Divisão", resultadoDiv)

}

digDiv(inserirNum1, inserirNum2)



