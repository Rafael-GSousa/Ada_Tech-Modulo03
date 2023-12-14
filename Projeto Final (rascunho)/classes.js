class Transacao {
  constructor(tipo, descricao, valor, categoria, data) {
    this.tipo = tipo;
    this.descricao = descricao;
    this.valor = valor;
    this.categoria = categoria;
    this.data = data;
  }
}

class Categoria {
  constructor(nome) {
    this.nome = nome;
  }
}

class MetaFinanceira {
  constructor(descricao, valorMeta, progresso) {
    this.descricao = descricao;
    this.valorMeta = valorMeta;
    this.progresso = progresso;
  }
}

export {
  Transacao,
  Categoria,
  met
}