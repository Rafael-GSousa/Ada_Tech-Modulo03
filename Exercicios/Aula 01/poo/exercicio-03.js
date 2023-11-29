console.clear();

class Carro {
  constructor(modelo, ano, ligado = false) {
    this.modelo = modelo;
    this.ano = ano;
    this.ligado = ligado;
  }

  ligar() {
    if (!this.ligado) {
      console.log(`Ligando o ${this.modelo}`);
      this.ligado = true;
    } else {
      throw new Error("O carro já está ligado!");
    }
  }

  desligar() {
    if (this.ligado) {
      console.log(`Desligando o ${this.modelo}`);
      this.ligado = false;
    } else {
      throw new Error("O carro já está desligado!");
    }
  }

  acelerar() {
    if (this.ligado) {
      console.log(`Acelerando o ${this.modelo}`);
    } else {
      throw new Error("O carro precisa estar ligado para acelerar!");
    }
  }

  frear() {
    if (this.ligado) {
      console.log(`Freando o ${this.modelo}`);
    } else {
      throw new Error("O carro já está desligado!");
    }
  }

  status() {
    if (this.ligado) {
      return `O ${this.modelo} está ligado!`;
    } else {
      return `O ${this.modelo} está desligado!`;
    }
  }
}

const carro1 = new Carro("Porsche", 2020);
carro1.ligar();
const carro2 = new Carro("Corsa", 2000);
carro2.ligar();
carro2.acelerar();
const carro3 = new Carro("Civic", 2023);
carro3.ligar();
carro3.acelerar();
carro3.frear();
const carro4 = new Carro("Bentley", 2022);
carro4.ligar();
carro4.acelerar();
carro4.frear();
carro4.desligar();

console.log("\n");
console.log(carro1.status());
console.log(carro2.status());
console.log(carro3.status());
console.log(carro4.status());
