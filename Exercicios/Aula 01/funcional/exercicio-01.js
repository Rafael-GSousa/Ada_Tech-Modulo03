// Objetivo: Criar uma função que recebe uma lista de números e retorna a soma dos quadrados dos números pares.

// 1. Crie uma função chamada `somaQuadradosPares` que recebe uma lista de números.
// 2. Utilize programação funcional para filtrar os números pares da lista.
// 3. Eleve cada número par ao quadrado.
// 4. Calcule a soma dos quadrados obtidos.
// 5. Retorne o resultado.

const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const somaQuadradosPares = (listaNumeros) => {
  return listaNumeros
    .filter((numero) => numero % 2 === 0)
    .map((numero) => Math.pow(numero, 2))
    .reduce((acc, numero) => acc + numero, 0);
};

console.log(somaQuadradosPares(listaNumeros));
