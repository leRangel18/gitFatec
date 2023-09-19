import PromptSync from "prompt-sync"

const prompt = PromptSync()

console.log("Exercício01")

function calcularPrecoComDesconto(val, quant, callback){
    const total = val * quant
    return callback(total)
}

function desconto(total){
    const desconto = 0.10
    const precoTotal = total * (1 - desconto)
    return precoTotal
}

    const val = Number(prompt("Digite o valor: "))
    const quant = Number(prompt("Digite a quantidade: "))


    let valorNovo = calcularPrecoComDesconto(val,quant,desconto)

    console.log(`O valor com desconto aplicado é: ${valorNovo}`)

// forEach 

    const matriz = [
    [5,10,12],
    [2,9,11],
    [15,8,6]
    ]
    
console.log("Exercício02")

    matriz.forEach(function (linha) {
        linha.forEach(function (val) {
          if (val > 10) {
            console.log(val);
          }
        });
      });