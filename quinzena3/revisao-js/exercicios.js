// EXERCÍCIO 01
function inverteArray(array) {
  
  const meuArrayInvertido = array.map(function (item, indice, array){
  return array[array.length - indice - 1];
 });
 return meuArrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
let arrayPar = []
for (i=0; i < array.length; i++){
  if(array[i]%2 === 0){
    arrayPar.push(array[i]**2)
  }
}
return arrayPar
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const par = function(item){
    return item % 2 === 0
  }
  const verificaPar = array.filter(par)
  return verificaPar
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  const maximo = Math.max(...array)
  return maximo
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
 const quantidadeElementos = array.length 
 return quantidadeElementos
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3
  const problemaUm = booleano1 && booleano2 && !booleano4
  const problemaDois = (booleano1 && booleano2) || !booleano3
  const problemaTres = (booleano2 || booleano3) && (booleano4 || booleano1)
  const problemaQuatro = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  const problemaCinco = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
  const array = []
  array.push(problemaUm, problemaDois, problemaTres, problemaQuatro, problemaCinco)
  return array
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const arrayPar = []
  let par = 0
  let i = 0 
  while (i<n){
    i++
    arrayPar.push(par)
    par = par +2
  }
 return arrayPar
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
  if (a === b && a === c){
    return "Equilátero"
  }else if((a === b && b !== c) || (a !== b && b === c)){
    return "Isósceles"
  }else{(a !== b && b !== c && a !== c)
    return "Escaleno"
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
 
 let maior, menor
 if (num1 > num2){
   maior = num1
   menor = num2
 }else {(num1 < num2)
   maior = num2
   menor = num1
 }


  let teste = {
  //maiorNumero: Math.max(num1, num2),
  maiorNumero: maior,
  maiorDivisivelPorMenor: maior % menor === 0,
  diferenca: maior - menor 
}
return teste
}


// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let tamanho = array.length;
  for (let i = 0; i < tamanho; i++) {
      for (let j = 0; j < tamanho; j++) {
          if (array[j] > array[j + 1]) {
              let aux = array[j];
              array[j] = array[j + 1];
              array[j + 1] = aux;
          }
      }
  }
  
  return [array[array.length - 2], array[1]]
}

// EXERCÍCIO 11
function ordenaArray(array) {
let ordenaCrescente = array.sort((a, b) => a - b)
return ordenaCrescente
}

// EXERCÍCIO 12
function filmeFavorito() {
  const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"],
  }
  return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", " Anne Hathaway", " Emily Blunt", " Stanley Tucci"]
  }
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const largura = lado1
  const altura = lado2
  const perimetro = 2 * (lado1 + lado2)
  const area = lado1 * lado2
  return {largura, altura, perimetro, area}
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
 let objetoAnonimo = {
   nome: "ANÔNIMO",
   idade: pessoa.idade,
   email: pessoa.email,
   endereco: pessoa.endereco
 }
  return objetoAnonimo


}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
