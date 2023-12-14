console.clear();
class ContadorDePalavras {
  texto;

  constructor(texto) {
    this.texto = texto;
  }

  contarPalavras() {
    let arrayPalavras = this.texto.split(" ");
    arrayPalavras = arrayPalavras.filter((palavra) => palavra !== "");

    return arrayPalavras.length;
  }
}

const contadorDePalavras = new ContadorDePalavras(
  "JavaScript é uma linguagem poderosa."
);

const contagem = contadorDePalavras.contarPalavras();
console.log(`Número de palavras: ${contagem}`);