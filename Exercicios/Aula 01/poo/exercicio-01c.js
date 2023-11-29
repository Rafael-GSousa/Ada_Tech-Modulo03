console.clear();
class Pessoa {
  nome;
  idade;
  cidade;

  constructor(nome, idade, cidade, ano = '', bissexto = false, idadeAnoEscolhido = '') {
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
    this.ano = ano;
    this.bissexto = bissexto;
    this.idadeAnoEscolhido = idadeAnoEscolhido;
  }

  calcularIdadeBissextos(ano) {
    const anoAtual = new Date().getFullYear();
    const anoNascimento = anoAtual - this.idade;
    this.ano = ano;
    if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
      this.bissexto = true;
    }
    this.idadeAnoEscolhido = ano - anoNascimento;

    return this.idadeAnoEscolhido;
  }
}

const pessoa1 = new Pessoa("Rafael", 34, "São Paulo");
const pessoa2 = new Pessoa("Aline", 19, "Paraná");
const pessoa3 = new Pessoa("João", 73, "Amazonas");

const anoPessoa1 = 2020
const anoPessoa2 = 2030
const anoPessoa3 = 1982
console.log(
  `Idade de ${pessoa1.nome} em ${anoPessoa1} => ${pessoa1.calcularIdadeBissextos(
    anoPessoa1
  )} anos`
);
console.log(
  `Idade de ${pessoa2.nome} em ${anoPessoa2} => ${pessoa2.calcularIdadeBissextos(
    anoPessoa2
  )} anos`
);
console.log(
  `Idade de ${pessoa3.nome} em ${anoPessoa3} => ${pessoa3.calcularIdadeBissextos(
    anoPessoa3
  )} anos`
);

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
