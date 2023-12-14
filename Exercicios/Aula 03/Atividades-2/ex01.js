console.clear()
class Conta {
  #saldo

  constructor() {
    this.#saldo = 0
  }

  depositar(valor) {
    this.#saldo += valor
    console.log(`Depósito de ${valor} realizado com sucesso para ...!`)
  }

  sacar(valor) {
    if (valor <= this.#saldo){
      this.#saldo -= valor
      console.log(`Saque de R$ ${valor.toFixed(2)} realizado.`)
    } else {
      console.log(`Saldo insuficiente!`)
    }
  }

  consultarSaldo() {
    return this.#saldo.toFixed(2)
  }
}

class Cliente{
  nome
  idade

  constructor(nome, idade) {
    this.nome = nome
    this.idade = idade
    this.contas = []
  }

  cadastrarConta(tipo) {
      this.contas.push(tipo)
 }
}

class ContaCorrente extends Conta {
  constructor() {
    super()
  }
}

class ContaPoupanca extends Conta {
  constructor() {
    super()
  }
}
const contaCorrente = new ContaCorrente()
const contaPoupanca = new ContaPoupanca()

const cliente01 = new Cliente('Rafael', 34)
const cliente02 = new Cliente('Rafaela', 31)
const cliente03 = new Cliente('Rafa', 30)
cliente01.cadastrarConta(contaCorrente)
cliente01.cadastrarConta(contaPoupanca)
cliente02.cadastrarConta(contaCorrente)
cliente02.cadastrarConta(contaPoupanca)
// cliente03.cadastrarConta(contaCorrente)
cliente03.cadastrarConta(contaPoupanca)
cliente01.contas[0].depositar(200)
cliente01.contas[1].depositar(300)
cliente02.contas[0].depositar(200)
cliente02.contas[1].depositar(300)
cliente01.contas[1].sacar(400)
contaCorrente.depositar(1000)

console.log(cliente03)
console.log(cliente01)
console.log(cliente02)
console.log(cliente03)
