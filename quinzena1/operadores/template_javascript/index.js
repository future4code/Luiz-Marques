//Exercicios de interpretação/escrita Aula 04

//Interpretação

//Resolução exercicio 01

//console.log("a. ", resultado) = False

//console.log("b. ", resultado) = False

//console.log("c. ", resultado) = true

//console.log("d. ", typeof resultado) = Boolean

//Resoulção exercicio 02

//Faltou ao meu amigo especificar que e um Number ou seja Number(prompt("Digite um numero!"))

//Resolução exercicio 03

//Abaixo minha solução para o codigo do meu amigo:
//let primeiroNumero = prompt("Digite um numero!")
//let segundoNumero = prompt("Digite outro numero!")

//const soma = primeiroNumero + segundoNumero

//console.log(soma)

//Exercicio de escrita de Codigo 01

let suaIdade =Number(prompt("Qual sua idade?"))
let idadeAmigo =Number(prompt("Qual idade do seu melhor amigo?"))

console.log("Sua idade é maior do que a do seu melhor amigo?", suaIdade > idadeAmigo)
console.log("A diferença entre as idades:", suaIdade - idadeAmigo)

//Exercicio de escrita de Codigo 02

let numeroPar =Number(prompt("Digite um numero PAR"))
console.log("O resto da divisão é:", numeroPar % 2)

//Se um numero for divisivel pelo outro o resto sempre vai ser 0

//Exercicio de escrita de Codigo 03

let idadeCalc =Number(prompt("Digite sua idade para calculo"))
console.log("Sua idade em meses:", idadeCalc * 12)
console.log("Sua idade em dias:", idadeCalc * 365)
console.log("Sua idade em horas:", idadeCalc * 8760)

//Exercicio de escrita de codigo 04

let numeroUm =Number(prompt("Digite um numero"))
let numeroDois =Number(prompt("Digite outro numero"))

let restDivUm = (numeroUm % numeroDois)
let restDivDois = (numeroDois % numeroUm)

console.log("O primeiro numero digitado foi:", numeroUm)
console.log("O segundo numero digitado foi:", numeroDois)


console.log("Primeiro numero é maior que o segundo?", numeroUm > numeroDois)
console.log("Primeiro numero é igual ao segundo?", numeroUm === numeroDois)
console.log("O primeiro numero é divisivel pelo segundo?", restDivUm === 0)
console.log("O segundo numero e divisivel pelo primeiro?", restDivDois === 0)


//Desafios

//(KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
//(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
//(CELSIUS/KELVIN) = CELSIUS + 273,15 = KELVIN

//a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

let FAHRENHEIT = 77
FAHRENHEIT = (77 - 32)*(5/9) + 273.15

console.log("a -", FAHRENHEIT, "K")

//b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também

let CELSIUS = 80
CELSIUS = (80)*(9/5) + 32

console.log("b -", CELSIUS, "F°")

//c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

let a = 30
a = (30)*(9/5) + 32
b = 30 + 273,15

console.log("c -", a,"F°", b, "K")

//d) ) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter

let c =Number(prompt("digite a temperatura em graus celsius"))
d = (c)*(9/5) + 32
e = c + 273,15

console.log("d -", d,"F°", e,"K")

//Desafio 02

//a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora

const qH = 0.05
a = qH * 280

console.log("a -", "R$",a)

//b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residen-
//cia acima considerando 15% de desconto

b = a * 0.15

c = a - b

console.log("b -","R$", c)

//Desafio 03

//a)

let libraToKg = 20
libraToKg = 20 / 2.205

console.log("a -", "20lb equivalem a", libraToKg, "kg")


//b)

oncaToKg = 10.5 / 33.594
console.log("b -", "10.5oz equivalem a", oncaToKg, "kg")

//c)

milhaToMetro = 100 * 1609
console.log("c -", "100mi equivalem a", milhaToMetro, "m")

//d)

ftToMetro = 50 / 3.281
console.log("d -", "50ft equivalem a", ftToMetro, "m")

//e)

galToLt = 103.56 * 3.806
console.log("e -", "103.56gal equivalem a", galToLt, "l")

//f)

xicToLt = 450 / 3.52
console.log("f -", "450 xic equivalem a", xicToLt, "l")

//g)

let milhaToMetro01 = Number(prompt("Digite o valor em milhas"))
milhaToMetro02 = milhaToMetro01 * 1609

console.log("g -", milhaToMetro01, "milhas equivalem a", milhaToMetro02, "m")



























