const anoAtual = new Date().getFullYear();

class Pessoa {
  nome;
  idade;
  cidade;

  constructor(nome, idade, cidade) {
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
  }

  calcularIdadeBissextos(ano) {
      return ano - anoAtual + this.idade;
  }
}

const pessoa1 = new Pessoa("Rafael", 34, "São Paulo");
const pessoa2 = new Pessoa("Aline", 19, "Paraná");
const pessoa3 = new Pessoa("João", 73, "Amazonas");

console.log(`Em 2022, ${pessoa1.nome} tinha ${pessoa1.calcularIdadeBissextos(2022)}`);
console.log(`Em 2030, ${pessoa2.nome} terá ${pessoa2.calcularIdadeBissextos(2030)}`);
console.log(`Em 1982, ${pessoa3.nome} tinha ${pessoa3.calcularIdadeBissextos(1982)}`);
