

class Transacao {
  constructor(tipo, descricao, valor, categoria, data) {
    if (tipo.toLowerCase() !== "receita" && tipo.toLowerCase() !== "despesa")
      throw new Error("Tipo de transação inválido!");
    if (isNaN(valor)) throw new Error("Valor deve ser um número!");
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

class GestorFinancas {
  constructor() {
    this.transacoes = [];
    this.categorias = [];
    this.metas = [];
    this.relatorio = [];
  }

  adicionarTransacao(transacao) {
    this.transacoes.push(transacao);
  }

  adicionarCategoria(categoria) {
    this.categorias.push(categoria);
  }

  adicionarMeta(meta) {
    this.metas.push(meta);
  }

  calcularSaldo() {
    let saldo = 0;

    this.transacoes.forEach((transacao) => {
      const isReceita = transacao.tipo.toLowerCase() === "receita";
      const isDespesa = transacao.tipo.toLowerCase() === "despesa";

      if (isReceita) {
        saldo += transacao.valor;
      }

      if (isDespesa) {
        saldo -= transacao.valor;
      }
    });

    const progressoMeta = this.metas.reduce((acc, meta) => {
      return acc + meta.progresso;
    }, 0);

    return (saldo -= progressoMeta);
  }

  exibirTransacoes(periodo) {
    let exibeTransacoes = this.transacoes.filter(
      (transacao) =>
        transacao.data >= periodo.inicio && transacao.data <= periodo.fim
    );

    exibeTransacoes = exibeTransacoes.map((transacao) => {
      transacao.data = transacao.data.toLocaleDateString("pt-BR");
      return transacao;
    });

    console.log(exibeTransacoes);
  }

  exibirCategorias() {
    console.log(this.categorias);
  }

  atualizarProgressoMeta(meta, valor) {
    const metaEncontrada = this.metas.find(
      (m) => m.descricao === meta.descricao
    );

    if (metaEncontrada) {
      metaEncontrada.progresso += valor;
    }
  }

  exibirMetas() {
    console.log(this.metas);
  }

  gerarRelatorioFinanceiro() {
    const categorias = this.transacoes.reduce((acc, transacao) => {
      const categoria = acc.find((c) => c.nome === transacao.categoria);
      if (categoria) {
        categoria.valor += transacao.valor;
      } else {
        acc.push({
          nome: transacao.categoria,
          tipo: transacao.tipo,
          valor: transacao.valor,
        });
      }
      return acc;
    }, []);

    const metas = this.metas.reduce((acc, meta) => {
      const mt = acc.find((m) => m.descricao === meta.descricao);
      if (mt) {
        mt.valor += meta.progresso;
      } else {
        acc.push({
          nome: meta.descricao,
          tipo: "despesa(meta)",
          valorAplicado: meta.progresso,
        });
      }
      return acc;
    }, []);

    const totais = this.transacoes.reduce((acc, transacao) => {
      const item = acc.find((i) => i.tipo === transacao.tipo);

      if (item) {
        item.total += transacao.valor;
      } else {
        acc.push({ tipo: transacao.tipo, total: transacao.valor });
      }

      return acc;
    }, []);

    const progressoMeta = this.metas.reduce((acc, meta) => {
      return acc + meta.progresso;
    }, 0);

    totais.push({ tipo: "despesa(meta)", total: progressoMeta });

    this.relatorio.push(categorias.concat(metas));
    totais.push({ saldo: this.calcularSaldo() });
    this.relatorio.push(totais);
    console.log(this.relatorio);
  }
}

// instanciando a classe Transação
const transacao1 = new Transacao(
  "receita",
  "depósito em dinheiro",
  1000,
  "money",
  new Date(2023, 12 - 1, 11)
);

const transacao2 = new Transacao(
  "receita",
  "depósito em dinheiro",
  500,
  "money",
  new Date(2023, 12 - 1, 11)
);

const transacao3 = new Transacao(
  "despesa",
  "saque em dinheiro",
  500,
  "bufunfa",
  new Date(2023, 12 - 1, 11)
);

// console.log(transacao1);
// console.log(transacao2);
// console.log(transacao3);

// instanciando a classe Categoria

const categoria1 = new Categoria("money");
const categoria2 = new Categoria("dinheiro");
const categoria3 = new Categoria("bufunfa");

// console.log(categoria1)
// console.log(categoria2)
// console.log(categoria3)

// instanciando a classe MetaFinanceira

const metaEconomia = new MetaFinanceira("Comprar uma casa", 500, 0);
const metaEconomia2 = new MetaFinanceira("Comprar um carro", 200, 0);

// console.log(metaEconomia)
// console.log(metaEconomia2)

// instanciando a classe GestorFinancas
const gestorFinancas = new GestorFinancas();

// criando as categorias
gestorFinancas.adicionarCategoria(categoria1);
gestorFinancas.adicionarCategoria(categoria2);
gestorFinancas.adicionarCategoria(categoria3);
// exibindo categorias
// gestorFinancas.exibirCategorias()

// criando as transações
gestorFinancas.adicionarTransacao(transacao1);
gestorFinancas.adicionarTransacao(transacao2);
gestorFinancas.adicionarTransacao(transacao3);
// exibindo transações do mes de dezembro
// gestorFinancas.exibirTransacoes({
//   inicio: new Date(2023, 12-1, 1),
//   fim: new Date(2023, 12-1, 31)
// })

// criando metas
gestorFinancas.adicionarMeta(metaEconomia);
gestorFinancas.adicionarMeta(metaEconomia2);
// exibindo metas
// gestorFinancas.exibirMetas()
// atualizando o progresso da meta
gestorFinancas.atualizarProgressoMeta(metaEconomia, 300);
gestorFinancas.atualizarProgressoMeta(metaEconomia2, 100);
// exibindo metas atualizadas
// gestorFinancas.exibirMetas()

// exibindo saldo total
const saldo = gestorFinancas.calcularSaldo();
// console.log(`Saldo total: R$ ${saldo.toFixed(2)}`)

// gerando relatório
gestorFinancas.gerarRelatorioFinanceiro();
