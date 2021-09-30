//EXERCICIOS DE INTERPRETAÇÃO DE CODIGO
//Exercicio 01
//Serão criados 3 novos objetos com conteudo de cada linha do array original

//Exercicio 02
//Sera impresso um array com os nomes: nome: "Amanda Rangel", "Lais Petra", "Leticia Chijo"

//Exercicio 03
//Ira aparecer um array com os apelidos "Mandi" e "Laura"

//EXERCICIOS DE ESCRITA DE CODIGO
//Exercicio 01
console.log("Exercicio 01")
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //A)
 console.log("A)")
 const arrayNomeDogs = pets.map((nome, indice, array) => {
     return nome.nome
 })
 console.log(arrayNomeDogs)

 //B)
 console.log("B)")
 const arraySalsicha = pets.filter((item, index, array) => {
     return item.raca === "Salsicha"
 })
 console.log(arraySalsicha)

 //C)
 console.log("C)")
 const arrayDesconto = pets.filter((item, index, array) => {
    return item.raca === "Poodle"
 })

 const arrayDescontoDois = arrayDesconto.map((item, index) => {
    const nomeDog = item.nome
    return ("Você ganhou um cupom de desconto de 10% para tosar o/a " + item.nome + "!")
 })
 
 console.log(arrayDescontoDois)
//Exercicio 02
console.log("Exercicio 02")
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
//a)
console.log("A)")
 const arrayNomeProdutos = produtos.map((item) => {
     return item.nome
 })
 console.log(arrayNomeProdutos)

 //b)
 console.log("B)")
 const arrayDescontoProdutos = produtos.map((item, indice, array) => {
  const novoValor = item.preco * 0.95
  const resultado = {
      nome: item.nome,
      preco: novoValor.toFixed(2)
  }
  return resultado
 })
 console.log(arrayDescontoProdutos)

 //c)
 console.log("C)")
 const arrayFiltroBebidas = produtos.filter((item, index, array) => {
     return item.categoria == "Bebidas"
 })
console.log(arrayFiltroBebidas)

//d)
console.log("D)")
const arrayYpe = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê")
})
console.log(arrayYpe)
 
//e)
console.log("E)")
const arrayDescontoYpe = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê")
 })

 const arrayDescontoFrase = arrayDescontoYpe.map((item, index) => {
   nome = item.nome
   preco = item.preco
    return ("Compre" + nome + "por R$"+ preco + "!" ) 
 })
 console.log(arrayDescontoFrase)


