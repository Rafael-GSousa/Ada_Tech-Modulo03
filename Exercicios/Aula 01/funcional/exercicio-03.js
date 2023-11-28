// Objetivo: Criar uma função que recebe uma lista de números e retorna a média dos números ímpares.

// javascript
// Copy code

// 1. Crie uma função chamada `mediaNumerosImpares` que recebe uma lista de números.
// 2. Utilize programação funcional para filtrar os números ímpares da lista.
// 3. Calcule a média dos números ímpares obtidos.
// 4. Retorne o resultado.

const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const somaQuadradosPares = (listaNumeros) => {
  let impares = listaNumeros.filter((numero) => numero % 2 === 1);
  let somaImpares = impares.reduce((acc, numero) => acc + numero, 0);
  return somaImpares / impares.length;
};

console.log(somaQuadradosPares(listaNumeros));
