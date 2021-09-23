//EXERCICIOS DE INTERPRETAÇÃO DE CODIGOS
//Exercicio 01
//A) Verifica se o numero digitado pelo usuario e par.
//B) Numeros pares
//C) Impar

//Exercicio 02
//A) Para verificar o preço da fruta digitada
//B) O preço da fruta Maçã é R$2.25
//C) O preço da fruta Pêra é R$5

//Exercicio 03
//A) Solicita para o usuario digitar um numero
//B) Digitando numero 10 aparece "Esse numero passou no teste", digitando o -10 não ira aparecer nada
//C) 

// EXERCICIO DE ESCRITA DE CODIGO
//Exercicio 01
console.log("Exercicio 01")

let idade = Number(prompt("Qual sua idade?"))

if (idade >= 18){
    console.log("Você pode dirigir")
}else{
    (idade < 18)
    console.log("Você não pode dirigir")
}

//Exercicio 02
console.log("Exercicio 02")

const verificarTurno = prompt("Digite M se você estuda no periodo MATUTINO, V para o vespertino ou N para o noturno").toUpperCase()

if (verificarTurno == "M"){
    console.log("Bom dia!")
} else if (verificarTurno == "V")
    console.log("Boa Tarde!")
    else if (verificarTurno == "N")
    console.log("Boa Noite!")
    else {
        console.log("Digite M,V OU N")
    
}

//Exercicio 03
console.log("Exercicio 03")

let estudo = prompt("Digite M se você estuda no periodo MATUTINO, V para o vespertino ou N para o noturno").toUpperCase()
let periodo
switch (estudo) {
  case "M":
    periodo = "BOM DIA!"
    break;
  case "V":
    periodo = "BOA TARDE"
    break;
  case "N":
    periodo = "BOA NOITE"
    break;
  default:
    periodo = "Digite M,V OU N"
    break;
}
console.log(periodo)

//Exercicio 04
console.log("Exericio 04")

let generoFilme = prompt("Digite o genero do filme que vai assistir").toUpperCase()
let precoIngresso = Number(prompt("Digite o Valor do ingresso"))

verificaGenero = generoFilme === "FANTASIA"
verificaPreço = precoIngresso <= 15

podeAssistir = verificaGenero && verificaPreço

if (podeAssistir == true){
    console.log("Bom filme!")
}else{(podeAssistir == false)
console.log("Escolha outro filme :(")
}

//DESAFIOS
//Exercicio 01
console.log("Desafio 01")

let generoFilme1 = prompt("Digite o genero do filme que vai assistir").toUpperCase()
let precoIngresso1 = Number(prompt("Digite o Valor do ingresso"))

verificaGenero1 = generoFilme1 === "FANTASIA"
verificaPreço1 = precoIngresso1 <= 15

podeAssistir1 = verificaGenero1 && verificaPreço1

if (podeAssistir1 == true){
    let lanchinho = prompt("Qual snack que você quer comprar?")
    console.log(`Bom filme! aproveite seu ${lanchinho}`)
}else{(podeAssistir1 == false)
console.log("Escolha outro filme :(")
}
