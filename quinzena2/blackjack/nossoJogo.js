/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao Blackjack(21)!")
const inicio = confirm("Gostaria de jogar BlackJack?")

if (inicio){
   const cartaUsuarioUm = comprarCarta()
   const cartaUsuarioDois = comprarCarta()
   const cartaCpuUm = comprarCarta()
   const cartaCpuDois = comprarCarta()

   const usuarioPontos = cartaUsuarioUm.valor + cartaUsuarioDois.valor
   const cpuPontos = cartaCpuUm.valor + cartaCpuDois.valor

   console.log("Suas cartas", cartaUsuarioUm.texto, cartaUsuarioDois.texto, "Sua Pontuação é:", usuarioPontos)
   console.log("Cartas cpu", cartaCpuUm.texto, cartaCpuDois.texto, "Pontuação cpu é:", cpuPontos)

   if (usuarioPontos > cpuPontos){
   console.log("Você ganhou!!!")
   }else if(usuarioPontos < cpuPontos){
   console.log("Você Perdeu!!!")
   }else{(usuarioPontos = cpuPontos)
   console.log("Foi empate!!!")
 }
 }else{
    console.log("O jogo acabou!!!")
 }

