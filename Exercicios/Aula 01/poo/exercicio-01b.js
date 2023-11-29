console.clear();
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
    const anoAtual = new Date().getFullYear();
    const anoNascimento = anoAtual - this.idade;
    const idadeEmAnosBissextos = []; //array de objetos onde serão adicionados os anos bissextos e a idade da pessoa em cada ano bissexto

    //percorre o intervalo entre o ano de nascimento e o ano passado como parâmetro
    for (let i = anoNascimento; i <= ano; i++) {
      //valida se o ano é ou não bissexto
      if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
        idadeEmAnosBissextos.push({ anoBissexto: i, idade: i - anoNascimento });
        this.bissextos = idadeEmAnosBissextos; //adiciona o atributo bissextos apenas se o ano for bissexto
      }
    }
    return this; //retorna a instância completa
  }
}

const pessoa1 = new Pessoa("Rafael", 34, "São Paulo");
const pessoa2 = new Pessoa("Aline", 19, "Paraná");
const pessoa3 = new Pessoa("João", 73, "Amazonas");

const anoPessoa1 = 2020;
const anoPessoa2 = 2030;
const anoPessoa3 = 1982;

console.log(pessoa1.calcularIdadeBissextos(anoPessoa1));
console.log(pessoa2.calcularIdadeBissextos(anoPessoa2));
console.log(pessoa3.calcularIdadeBissextos(anoPessoa3));
