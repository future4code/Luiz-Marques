//EXERCICIOS DE INTERPRETAÇÃO DE CODIGO
//Exercicio 01:
//console.log 01 resposta: Matheus Nachtergaele
//console.log 02 resposta: Eu rodei o codigo depois de viversas vezes tentar achar a resposta e a resposta que aparece no console.log
//e totalmente diferente da minha, alguem poderia me explicar o uso desse .length? 
//console.log 03 resposta: canal: globo, horario: 14h

//Exercicio 02:

//A)
//console.log 01: 
//nome: Juca 
//idade: 3
//raca: SRD

//console.log 02: 
//nome: Juba
//idade: 3
//raca: SRD

//console.log 03:
//nome: Jubo
//idade: 3
//raca: SRD

//B)
//Adiciona (espalha) dentro de um objeto o conteudo de outro objeto determinado escrito apos os ...

//Exercicio 03
//A)
//console.log 01 FALSE
//console.log 02 UNDEFINED

//B)
//No console.log 01 ele retorne false pois busca o valor dentro do objeto declarado em backender
//No console.log 02 ele tenta buscar uma informação que nao foi definida

//EXERCICIO DE ESCRITA DE CODIGO
//Exercicio 01
console.log("Exercicio 01")

const pessoa = {
nome: "Olivia",
apelidos: ["Pimpa", "Olivinha", "Pimpinha"]

}

function mensagem(pessoa){
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)

}

mensagem(pessoa)

const novosApelidos = {...pessoa, apelidos: ["Orelhuda","Vascaina", "limao"]
}

mensagem(novosApelidos)

//Exercicio 02
console.log("Exercicio 02")

const profissaoUm = {
    nome: "Luiz Felipe",
    idade: 36,
    profissão: "Programador" 

}
 
const profissaoDois = { 
    nome: "Isabelle",
    idade: 30,
    profissão: "Estilista"
}

function chamarDados(array1, array2){
    array1 = [profissaoUm.nome, profissaoUm.nome.length, profissaoUm.idade, profissaoUm.profissão, profissaoUm.profissão.length]
    array2 = [profissaoDois.nome, profissaoDois.nome.length, profissaoDois.idade, profissaoDois.profissão, profissaoDois.profissão.length]
    console.log(array1,array2)

}

chamarDados()

//Exercicio 03
console.log("Exercicio 03")

const carrinho = []

const fruta1 = {
    nome: "Uva",
    disponibilidade: true
}

const fruta2 = {
    nome: "banana",
    disponibilidade: true
}

const fruta3 = {
    nome: "kiwi",
    disponibilidade: true
}

function frutacarrinho(fruta1, fruta2, fruta3){
    carrinho.push(fruta1)
    carrinho.push(fruta2)
    carrinho.push(fruta3)

    return carrinho 

}
console.log(frutacarrinho(fruta1, fruta2, fruta3))



