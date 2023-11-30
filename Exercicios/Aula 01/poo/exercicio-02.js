console.clear();

class Animal {
  constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  }
}

class Mamifero extends Animal {
  amamentar() {
    return `${this.nome} está amamentando!`;
  }
}

class Ave extends Animal {
  voar() {
    return `${this.nome} está voando!`;
  }
}

const animal01 = new Mamifero("Doguinho", "Mamifero");
const animal02 = new Ave("Jubileu", 'Ave');

console.log(animal01);
console.log(animal02);
console.log(animal01.amamentar());
console.log(animal02.voar());
