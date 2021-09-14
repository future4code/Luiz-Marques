// EXERCICIOS DE INTERPRETAÇÃO DE CODIGOS
//Resposta exercicio 01
//a - undefined
//b - null
//c - 11
//d - 3
//e - [3, 19, 5, 6,... esse exercicio não entendi muito bem, porem creio que fique assim
//f - 9

//Resposta exercicio 02
//SUBI NUM ÔNIBUS EM MIRROCOS 27

// EXERCICIOS DE ESCRITA DE CODIGOS
// Exercicio 01:
const nomeDoUsuario = prompt("Digite seu nome")
const emailDoUsuario = prompt("Digite seu e-mail")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

// Exercicio 02:
let comidas = ["churrasco", "strogonoff", "lasanha", "parmegiana", "macarrao"]

//console.log(comidas)

console.log("Essas sao minhas comidas preferidas:")
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

comidas.splice(1, 1, prompt("Digite sua comida preferida"))

console.log(comidas)


//console.log(pergunta)

// Exercicio 03:
let listaDeTarefas = []

let tarefaUm = listaDeTarefas.push(prompt("Digite a primeira tarefa do dia"))
let tarefaDois = listaDeTarefas.push(prompt("Digite a segunda tarefa do dia"))
let tarefaTres = listaDeTarefas.push(prompt("Digite a terceira tarefa do dia"))



listaDeTarefas.splice(Number(prompt("digite um numero 0,1 ou 2 para tarefa ja executada")),1)

console.log(listaDeTarefas)

// DESAFIOS

// Exercicio 01:

teste = prompt("digite uma frase");

testeArray = teste.split( " " );

console.log(testeArray)

// Exercicio 02:

let array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

array.indexOf(2)

console.log(array.indexOf("Abacaxi"))
console.log(array.length)







