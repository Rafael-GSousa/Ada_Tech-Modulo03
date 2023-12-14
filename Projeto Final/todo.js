class Tarefa {
  constructor(descricao, prioridade, status) {
    this.descricao = descricao
    this.prioridade = prioridade
    this.status = status
  }
}

class ListaTarefas {
  constructor(categoria) {
    this.nome = categoria
    this.tarefas = []
  }

  adicionarTarefa(tarefa) {
    this.tarefas.push(tarefa)
  }

  removerTarefa(tarefa) {
    this.tarefas.remove(tarefa)
  }

  marcarConcluida(tarefa) {

  }

  exibirLista() {
    
  }

  calcularEstatisticas() {

  }
}

class AplicativoToDoList extends ListaTarefas{
  constructor() {
    super(this.adicionarTarefa, this.exibirLista)
    this.listasTarefas = []
    this.listaAtual = []
  }

  criarLista(nome) {
    this.listaAtual.push(nome)
  }

  selecionarLista(nome) {

  }

  exibirListasDisponiveis() {

  }
}

const tarefa1 = new Tarefa("Estudar JavaScript", "alta", "pendente");
const tarefa2 = new Tarefa("Fazer exercícios de POO", "média", "pendente");

const lista1 = new ListaTarefas("Trabalho");
lista1.adicionarTarefa(tarefa1);
lista1.adicionarTarefa(tarefa2);

const tarefa3 = new Tarefa("Comprar mantimentos", "baixa", "pendente");
const tarefa4 = new Tarefa("Correr no parque", "média", "pendente");

const lista2 = new ListaTarefas("Pessoal");
lista2.adicionarTarefa(tarefa3);
lista2.adicionarTarefa(tarefa4);

const appToDoList = new AplicativoToDoList();
appToDoList.criarLista("Estudos");
appToDoList.selecionarLista("Estudos");
appToDoList.adicionarTarefa(new Tarefa("Ler livro", "média", "pendente"));