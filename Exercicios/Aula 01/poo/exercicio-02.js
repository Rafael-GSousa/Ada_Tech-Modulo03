console.clear();

class Animal {
  constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  }
}

class Mamifero extends Animal {
  constructor(nome) {
    super(nome, "Mamífero");
  }

  amamentar() {
    return `${this.nome} está amamentando!`;
  }
}

class Ave extends Animal {
  constructor(nome) {
    super(nome, "Ave");
  }

  voar() {
    return `${this.nome} está voando!`;
  }
}

const animal01 = new Mamifero("Doguinho");
const animal02 = new Ave("Jubileu");

console.log(animal01.amamentar());
console.log(animal02.voar());
