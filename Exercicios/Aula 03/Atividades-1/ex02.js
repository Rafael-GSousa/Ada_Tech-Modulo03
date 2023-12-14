console.clear();
class ConversorDeMoeda {
  taxaCambio;

  constructor(taxaCambio) {
    this.taxaCambio = taxaCambio;
  }

  converter(valor, moedaOrigem, moedaDestino) {
    if (moedaOrigem === "USD" && moedaDestino === "BRL") {
      return `${(valor * this.taxaCambio).toFixed(2)} BRL`;
    } else {
      return `${(valor / this.taxaCambio).toFixed(2)} USD`;
    }
  }
}

// Criando instância do conversor de moeda
const conversorMoeda = new ConversorDeMoeda(5.0); // Taxa de câmbio: 5.0

// Convertendo moeda
const valorConvertido = conversorMoeda.converter(100, "USD", "BRL");
console.log(`Valor convertido: ${valorConvertido}`);
