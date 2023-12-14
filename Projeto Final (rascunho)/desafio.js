console.clear();

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
    let receita = 0;
    let despesa = 0;
    let categoria = [];
    let meta = [];

    //totais de receita e despesa
    this.transacoes.forEach((transacao) => {     
      if (transacao.tipo.toLowerCase() === "receita") {
        this.relatorio.totalReceitas = receita += transacao.valor;
      }

      if (transacao.tipo.toLowerCase() === "despesa") {
        this.relatorio.totalDespesas = despesa += transacao.valor;
      }
    });

    //metas
    
    this.transacoes.forEach(transacao => {
      const metaEncontrada = this.metas.find((meta) => meta.descricao);
      
      if (metaEncontrada) {
        this.relatorio.totalDespesas = despesa += metaEncontrada.progresso;
  
        meta.push({
          nome: metaEncontrada.descricao,
          valorInvestido: `-${metaEncontrada.progresso}`,
        });
      }
    })

    this.relatorio.metas = meta;

    console.log(this.relatorio);
  }
}

const transacao1 = new Transacao(
  "Receita",
  "Salário",
  3000,
  "Salário",
  new Date("2023-02-01")
);

const transacao1a = new Transacao(
  "Receita",
  "Salário",
  3000,
  "Salário",
  new Date("2023-02-01")
);

const transacao2 = new Transacao(
  "Despesa",
  "Aluguel",
  800,
  "Moradia",
  new Date("2023-02-05")
);
const transacao3 = new Transacao(
  "Despesa",
  "Supermercado",
  150,
  "Alimentação",
  new Date("2023-02-10")
);

const categoriaSalario = new Categoria("Salário");
const categoriaMoradia = new Categoria("Moradia");
const categoriaAlimentacao = new Categoria("Alimentação");

const metaEconomia = new MetaFinanceira("Economia para viagem", 500, 0);
const metaEconomia2 = new MetaFinanceira("Economia para viagem", 100, 0);

const gestorFinancas = new GestorFinancas();
gestorFinancas.adicionarCategoria(categoriaSalario);
gestorFinancas.adicionarCategoria(categoriaMoradia);
gestorFinancas.adicionarCategoria(categoriaAlimentacao);

gestorFinancas.adicionarTransacao(transacao1);
gestorFinancas.adicionarTransacao(transacao1a);
gestorFinancas.adicionarTransacao(transacao2);
gestorFinancas.adicionarTransacao(transacao3);

gestorFinancas.adicionarMeta(metaEconomia);
gestorFinancas.adicionarMeta(metaEconomia2);

// Exibir transações do mês de fevereiro
gestorFinancas.exibirTransacoes({
  inicio: new Date("2023-02-01"),
  fim: new Date("2023-02-28"),
});

// Exibir categorias disponíveis
gestorFinancas.exibirCategorias();

// Atualizar progresso da meta
gestorFinancas.atualizarProgressoMeta(metaEconomia, 200);
gestorFinancas.exibirMetas();

// Exibir saldo total
console.log(`Saldo Total: R$ ${gestorFinancas.calcularSaldo().toFixed(2)}`);

// Gerar relatório financeiro
gestorFinancas.gerarRelatorioFinanceiro();
