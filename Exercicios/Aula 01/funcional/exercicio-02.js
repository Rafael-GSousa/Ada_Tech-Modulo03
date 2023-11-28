// Objetivo: Criar uma função que recebe uma lista de palavras e retorna uma nova lista com as palavras ordenadas por tamanho, da menor para a maior.

// esperada: ["uva", "banana", "laranja", "abacaxi"]

const listaPalavras = [
  "pedra",
  "comida",
  "paralelepipedo",
  "sol",
  "paz",
  "carro",
  "cachorro",
  "aviao",
  "onibus",
];

const ordenaPalavras = (listaPalavras) => {
  return listaPalavras.sort(
    (palavraAtual, palavraSeguinte) =>
      palavraAtual.length - palavraSeguinte.length
  );
};

console.log(ordenaPalavras(listaPalavras));
