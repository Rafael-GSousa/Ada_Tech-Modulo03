const displayTransacao = document.querySelector('.adicionarTransacao')
const displayMeta = document.querySelector('.adicionarMeta')
const displayProgresso = document.querySelector('.atualizarMeta')
// Inputs para adicionar transação
const tipo = document.querySelector('#tipo');
const descricao = document.querySelector('#descricao');
const valor = document.querySelector('#valor');
const categoria = document.querySelector('#categoria');
const data = document.querySelector('#data');
// Inputs para adicionar meta (as tags descricao e valor acima servirão para ambas, sem necessidade de repetição)
// const progresso = document.querySelector();

const form = document.querySelector('#adicionarTransacao-form')
const section = document.querySelector('section')


form.addEventListener('submit', (evento) => {
  evento.preventDefault()
  
  // transforma a data do input em uma instancia de Date
  const dataFormatada = new Date(data.value)
  // Obter o offset do fuso horário em minutos
  const offset = new Date().getTimezoneOffset() 
  // Ajustar a data pelo offset (no caso somando o offset aos minutos da data formatada pois em pt-BR joga para o dia anterior às 21:00)
  dataFormatada.setMinutes(dataFormatada.getMinutes() + offset)
  console.log(tipo.value)
  console.log(descricao.value)
  console.log(valor.value)
  console.log(categoria.value)
  console.log(dataFormatada.toLocaleDateString('pt-BR'))

  const article = document.createElement('article')
  article.classList.add('card')
  const articleSpan1 = document.createElement('span')
  const articleSpan2 = document.createElement('span')
  const articleSpan3 = document.createElement('span')
  const articleSpan4 = document.createElement('span')
  const articleSpan5 = document.createElement('span')
  const articleButton = document.createElement('button')


  articleSpan1.textContent = 'Tipo: ' + tipo.value
  articleSpan2.textContent = 'Descrição: ' + descricao.value
  articleSpan3.textContent = 'Valor: R$ ' + valor.value
  articleSpan4.textContent = 'Categoria: ' + categoria.value
  articleSpan5.textContent = 'Data: ' + dataFormatada.toLocaleDateString('pt-BR')

  article.appendChild(articleSpan1)
  article.appendChild(articleSpan2)
  article.appendChild(articleSpan3)
  article.appendChild(articleSpan4)
  article.appendChild(articleSpan5)
  section.appendChild(article)
  // console.log(article)
})


























// const gestorFinancas = new GestorFinancas()
// const transacao = new Transacao(tipo, descricao, Number(valor), categoria, new Date(data))
// const meta = new MetaFinanceira(descricao, Number(valorMeta), Number(progresso))







// class Transacao {
//   constructor(tipo, descricao, valor, categoria, data) {
//     this.tipo = tipo;
//     this.descricao = descricao;
//     this.valor = valor;
//     this.categoria = categoria;
//     this.data = data;
//   }
// }

// class Categoria {
//   constructor(nome) {
//     this.nome = nome;
//   }
// }

// class MetaFinanceira {
//   constructor(descricao, valorMeta, progresso) {
//     this.descricao = descricao;
//     this.valorMeta = valorMeta;
//     this.progresso = progresso;
//   }
// }

// class GestorFinancas {
//   constructor() {
//     this.transacoes = [];
//     this.categorias = [];
//     this.metas = [];
//     this.relatorio = [];
//   }

//   adicionarTransacao(transacao) {
//   }

//   adicionarCategoria(categoria) {
//   }

//   adicionarMeta(meta) {
//   }

//   calcularSaldo() {
//   }

//   exibirTransacoes(periodo) {

//   }

//   exibirCategorias() {
//   }

//   atualizarProgressoMeta(meta, valor) {

//   }

//   exibirMetas() {
//   }

//   gerarRelatorioFinanceiro() {
//   }
// }