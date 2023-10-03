// Atvd01 - Funções matemáticas

function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function divisao(a, b) {
  if (b === 0) {
    console.log("Não é possível dividir por zero.");
  }
  return a / b;
}

function multiplicacao(a, b) {
  return a * b;
}

function calculo(a, b, callback) {
  if (typeof callback === 'function') {
    return callback(a, b);
  } else {
    console.log("O terceiro parâmetro deve ser uma função.");
  }
}

const resultadoSoma = calculo(121, 11, soma);
console.log("O resultado da soma é:", resultadoSoma);

const resultadoSubtracao = calculo(121, 11, subtracao);
console.log("O resultado da subtração é:", resultadoSubtracao);

const resultadoDivisao = calculo(121, 11, divisao);
console.log("O resultado da divisão é:", resultadoDivisao);

const resultadoMultiplicacao = calculo(121, 11, multiplicacao);
console.log("O resultado da multiplicação é:", resultadoMultiplicacao);

console.log(" ");


// Atvd02 - 

class Cliente {
    constructor(nome, telefone, renda, email) {
      this.nome = nome;
      this.telefone = telefone;
      this.renda = renda;
      this.email = email;
    }
  
    verificarCredito() {
      return new Promise((resolve, reject) => {
        if (this.renda > 2000) {
          resolve("Aprovado");
        } else {
          reject("Recusado");
        }
      });
    }
  }
  
 
  const cliente01 = new Cliente("Letícia Rangel", "123-456-7890", 2500, "lerangel@email.com");
  
  cliente01.verificarCredito()
    .then((mensagem) => {
      console.log(`O(A) cliente ${cliente01.nome} teve seu crédito: ${mensagem}`);
    })
    .catch((mensagem) => {
      console.log(`O(A) cliente ${cliente01.nome} teve seu crédito: ${mensagem}`);
    });
