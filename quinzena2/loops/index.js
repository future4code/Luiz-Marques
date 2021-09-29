//EXERCICIOS DE INTERPRETAÇÃO DE CODIGO
//Exercicio 01:
//Resposta: 10

//Exercicio 02:
//Resposta A): 19, 21, 23, 25, 27, 30
//Resposta B): 

//Exercicio 03:
//Resposta A): *
//             **
//             ***
//             ****

//EXERCICIOS DE ESCRITA DE CODIGO
//Exercicio 01
console.log("Exercicio 01")
let array = []
let quantidadeDePets = Number(prompt("Quantos bichos você possui?"))
if (quantidadeDePets === 0){
    console.log("Que pena! Você pode adotar um pet!")
}else{
    for (let nomeDoPet = quantidadeDePets; quantidadeDePets > 0; quantidadeDePets--){
       let nomeDoPet = prompt("Digite nome do pet")
      
       array.push(nomeDoPet)
    
    }
    console.log(array)
}


//Exercicio 02
console.log("Exercicio 02")
console.log("A)")
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function arrayA(indice){
    indice = [indice]
    console.log(arrayOriginal[indice])

}
arrayA([0])
arrayA([1])
arrayA([2])
arrayA([3])
arrayA([4])
arrayA([5])
arrayA([6])
arrayA([7])
arrayA([8])
arrayA([9])
arrayA([10])
arrayA([11])

console.log("B)")

function arrayB(indice){
    indice = [indice]
    console.log(arrayOriginal[indice] / 10)
}

arrayB([0])
arrayB([1])
arrayB([2])
arrayB([3])
arrayB([4])
arrayB([5])
arrayB([6])
arrayB([7])
arrayB([8])
arrayB([9])
arrayB([10])
arrayB([11])

//Exercicio 03
console.log("C)")
let array10 = []
function arrayC(){
    for (let par of arrayOriginal){
    if (par % 2 === 0)
    array10.push(par)
    }
    console.log(array10)
}

arrayC()


//Exercicio 04
console.log("D)")
let arrayIndex = []
function indiceArray(){
    for (i = 0; i < arrayOriginal.length; i++){
        let stringarray = "O elemento do index "+i+" é "+arrayOriginal[i]
        console.log(stringarray)

    }
}
indiceArray()

//Exercicio 05
console.log("E)")
const maiorNumero = arrayOriginal =>{
        let maiorNumero = arrayOriginal[0]
         for (let numeroEmAnalise of arrayOriginal)
            if (numeroEmAnalise > maiorNumero){
                 maiorNumero = numeroEmAnalise
             }
     return maiorNumero
     }
     console.log ("O maior número da array é:", maiorNumero(arrayOriginal))
    
     const menorNumero = arrayOriginal =>{
         let menorNumero = arrayOriginal[0]
             for (let numeroEmAnalise of arrayOriginal)
             if (numeroEmAnalise < menorNumero){
                 menorNumero = numeroEmAnalise
             }
     return menorNumero
     }
      console.log ("O menor número da array é:", menorNumero(arrayOriginal))


//teste
//console.log("teste")
//let array = [] 
//let quantidadeDePets1 = Number(prompt("Quantos bichos você possui?"))
//if (quantidadeDePets1 === 0){
    //console.log("Que pena! Você pode adotar um pet!")
//}else{
    //for (let i = 0; i < quantidadeDePets1; i++){
       //let pets = prompt("Digite nome do pet")
       //let array = [] 
      // array.push(pets)
       //console.log(array)
 //   }
    
    //console.log(array) 
//}
  
