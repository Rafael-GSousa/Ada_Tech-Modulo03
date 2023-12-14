console.clear();

const prompt = require('prompt-sync')()

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

class GestorFinancas {
  constructor() {
    this.transacoes = [];
    this.categorias = [];
    this.metas = [];
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

  gerarRelatorio() {
    const categorias = this.categorias.reduce((acc, categoria) => {
      acc[categoria.nome] = {
        valor: 0,
      };
      return acc;
    }, {});

    const metas = this.metas.reduce((acc, meta) => {
      acc[meta.descricao] = {
        valor: meta.valorMeta,
        valorAplicado: meta.progresso,
      };
      return acc;
    }, {});

    this.transacoes.forEach((transacao) => {
      const categoria = categorias[transacao.categoria];
      categoria.valor += transacao.valor;
    });

    this.metas.forEach((meta) => {
      const categoria = categorias[meta.descricao];
      categoria.valorAplicado += meta.progresso;
    });

    const totais = {
      receita: 0,
      despesa: 0,
    };

    categorias.forEach((categoria) => {
      const valor = categoria.valor;
      if (valor > 0) {
        totais.receita += valor;
      } else {
        totais.despesa += valor;
      }
    });

    return {
      categorias,
      metas,
      totais,
    };
  }
}




const menu = () => {
  const gestorFinancas = new GestorFinancas();

  while (true) {
    console.log(`
    ===== Sistema de Gestão Financeira
    ===== Menu de opções
    1. Adicionar Transação
    2. Adicionar Meta
    3. Excluir Transação
    4. Excluir Meta
    5. Exibir Transações
    6. Exibir Categorias
    7. Exibir Metas
    8. Relatório Financeiro
    9. Sair
    `);

    const opcao = prompt('Digite uma opção: ');

    switch (opcao) {
      case '1':
        console.log('===== Adicionando Transação =====');
        const tipo = prompt(`Tipo [receita | despesa]: `);
        let descricao = prompt('Descrição: ');
        const valor = prompt('Valor: R$');
        const categoria = prompt('Categoria: ');
        const data = prompt('Data [AAAA-MM-DD]: ');
        const transacao = new Transacao(tipo, descricao, Number(valor), categoria, new Date(data));
        gestorFinancas.transacoes.adicionar(transacao);
        break;
      case '2':
        console.log('===== Adicionando Meta =====');
        descricao = prompt('Descrição: ');
        const valorMeta = prompt('Valor: R$');
        const progresso = prompt('Progresso: R$');
        const meta = new MetaFinanceira(descricao, Number(valorMeta), Number(progresso));
        gestorFinancas.metas.adicionar(meta);
        break;
      case '3':
        console.log('===== Excluindo Transação =====');
        const id = prompt('ID da transação a ser excluída: ');
        gestorFinancas.transacoes.excluir(id);
        break;
      case '4':
        console.log('===== Excluindo Meta =====');
        descricao = prompt('Descrição da meta a ser excluída: ');
        gestorFinancas.metas.excluir(descricao);
        break;
      case '5':
        console.log('===== Exibindo Transações =====');
        const transacoes = gestorFinancas.transacoes.listar();
        console.log(transacoes);
        break;
      case '6':
        console.log('===== Exibindo Categorias =====');
        const categorias = gestorFinancas.categorias.listar();
        console.log(categorias);
        break;
      case '7':
        console.log('===== Exibindo Metas =====');
        const metas = gestorFinancas.metas.listar();
        console.log(metas);
        break;
      case '8':
        console.log('===== Gerando Relatório Financeiro =====');
        const relatorio = gestorFinancas.gerarRelatorio();
        console.log(relatorio);
        break;
      case '9':
        console.log('Encerrando o programa...');
        process.exit();
        break;
      default:
        console.log('Opção inválida!. Tente novamente!\n');
    }
  }
};

menu();
