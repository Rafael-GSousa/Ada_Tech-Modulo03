console.clear();

const prompt = require('prompt-sync')()

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

function menu() {
  while(true){
    const gestorFinancas = new GestorFinancas();
    console.log(`Sistema de Gestão Financeira
    Menu de opções
    1. Adicionar Transação
    2. Adicionar Meta
    3. Atualizar Meta
    4. Exibir Metas
    5. Exibir Saldo
    6. Exibir Transações (por período)
    7. Exibir Categorias
    8. Relatório Financeiro
    9. Sair
    `)
  
    const opcao = prompt('Digite uma opção: ')
  
    switch(opcao){
      case '1':
        console.log('===== Adicionando Transação =====')
        const tipo = prompt(`Tipo [receita | despesa]: `)
        const descricao = prompt('Descrição: ')
        const valor = prompt('Valor: R$')
        const categoria = prompt('Categoria: ')
        const data = prompt('Data [AAAA-MM-DD]: ')
        const transacao = new Transacao(tipo, descricao, Number(valor), categoria, new Date(data))
        gestorFinancas.adicionarTransacao(transacao)
        gestorFinancas.adicionarCategoria(categoria);
        break
      case '2':
        console.log('===== Adicionando Meta =====')
        let metaDescricao = prompt('Descrição: ')
        const metaCusto = prompt('Custo: R$')
        let metaValorAplicado = prompt('Valor aplicado: R$')
        gestorFinancas.adicionarMeta(metaDescricao, Number(metaCusto), Number(metaValorAplicado));
        break
      case '3':
        console.log('===== Atualizando Meta =====')
        metaDescricao = prompt('Nome da meta: ')
        metaValorAplicado = prompt('Valor aplicado: R$')
        gestorFinancas.atualizarProgressoMeta(metaDescricao, Number(metaValorAplicado));
        break
        case '4':
          gestorFinancas.exibirMetas()
          break
      case '5':
        const saldo = gestorFinancas.calcularSaldo();
        console.log(`Saldo total: R$ ${saldo.toFixed(2)}`)
        break
      case '6':
        const dataInicial = prompt('Data inicial [AAAA-MM-DD]: ')
        const dataFinal = prompt('Data final [AAAA-MM-DD]: ')
        gestorFinancas.exibirTransacoes({
          inicio: new Date(dataInicial),
          fim: new Date(dataFinal)
          })
        break
      case '7':
        gestorFinancas.exibirCategorias()
        break
      case '8':
        gestorFinancas.gerarRelatorioFinanceiro();
        break
      case '9':
        console.log("Encerrando o programa...");
        process.exit();
      default:
        console.log("Opção inválida!. Tente novamente!\n");
    }  
  }
}

menu()