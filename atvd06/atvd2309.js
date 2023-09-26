// Atividade01:
lista = [10,12,15,35,40]

//01
media = 0
media = lista.reduce((acumulador,atual) => acumulador + atual, 0)/lista.length
valorMaior = lista.filter(valor => valor > media)
console.log(`01- Os valores acima da média são: ${valorMaior}`)
console.log(" ")

//02
function menorValor(lista){
    return lista.reduce((menor, atual) => {
        if (atual < menor) {
          return atual;
          console.log(menor)
          console.log(atual)
        } else {
          return menor;
        }
      });
}

const menor = menorValor(lista)
console.log(`02- O menor valor encontrado é: ${menor}`)
console.log(" ")

//03
soma = 0
soma = lista.reduce((acumulador,atual) => acumulador + atual, 0)
console.log(`03- O resultado da soma é: ${soma}`)
console.log(" ")

//04

const menorValor1 = lista => lista.filter(valor => valor > 20)
console.log(`04- Os valores acima de 20 são: ${menorValor1(lista)}`)
console.log(" ")

// Atividade02:

lista02 = [5,12,12,7,9]

console.log(`05- O primeiro valor da lista é: ${lista02[0]}`)
console.log(" ")
const outros = lista02.filter(valor1 => valor1 != lista02[0])
console.log(`06- O resto dos valores são: ${outros}`)
console.log(" ")