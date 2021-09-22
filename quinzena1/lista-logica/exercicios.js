// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const alturaRet = prompt("Digite a altura do retangulo")
  const larguraRet = prompt("Digite a largura do retangulo")

  console.log(Number(alturaRet) * Number(larguraRet))
}

// Exercício 2
function imprimeIdade() {
 // escreva seu código aqui
  let anoAtual =Number(prompt("Digite o ano que estamos"))
  let anoNascimento =Number(prompt("Digite seu ano de nascimento"))

  console.log(anoAtual - anoNascimento)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
const peso =Number(prompt("Digite seu peso em KG"))
const altura =Number(prompt("Digite sua altura em metros"))



console.log(peso / (altura * altura))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = prompt("Digite seu nome")
  const idade = Number(prompt("Digite sua idade"))
  const email = prompt("Digite seu email")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const corArray = [cor1 = prompt("Digite sua primeira cor favorita"), cor2 = prompt("digite sua segunda cor favorita"), cor3 = prompt("digite sua terceira cor favorita")]

  console.log(corArray)

}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const letra = prompt("Digite uma palavra")

  console.log(letra .toUpperCase())

}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custoEspetaculo =Number(prompt("Digite o custo do espetaculo"))
  const valorIngresso = Number(prompt("Digite o valor do ingresso"))

  console.log(custoEspetaculo / valorIngresso)
  
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const palavra1 = prompt("Digite uma palavra")
  const palavra2 = prompt("Digite outra palavra")

  console.log(palavra1.length === palavra2.length)

}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const igual1 = prompt("digite uma palavra")
  const igual2 = prompt("digite outra palavra")
  
  
  console.log( igual1.toUpperCase() === igual2.toUpperCase()) 
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoVigente1 = prompt("Digite o ano em que estamos")
  const anoNascimento1 = prompt("digite o seu ano de nascimento")
  const anoEmissao1 = prompt("digite o ano de emissao da sua carteira de motorista")

  idade = anoVigente1 - anoNascimento1
  renovacao = anoVigente1 - anoEmissao1

  consulta = (idade <=20 && renovacao >=5) || ((idade >20 && idade <=50) && renovacao >=10) || (idade >50 && renovacao >=15)

  console.log(consulta)
  
} 
// **São bissextos** todos os anos múltiplos de 400**.**/
// **São bissextos** todos os múltiplos de 4, exceto se for múltiplo de 100 mas não de 400**.**
//**Não são bissextos** todos os demais anos.
// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const checagemAno = prompt("Digite um ano")

  bissexto1 = (checagemAno % 400) == 0
  bissexto2 = ((checagemAno % 4 == 0) && (checagemAno % 100 != 0))
  bissextoNao = checagemAno && bissexto1 && bissexto2

console.log (bissextoNao || bissexto1 || bissexto2)

}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  let maior18 = prompt("Você tem mais de 18 anos?")
  let escolaridade = prompt ("Você possui ensino médio completo?")
  let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
 
  let condicional = (maior18 === "sim") && (escolaridade === "sim") && (disponibilidade === "sim")
 
  console.log(condicional)



}