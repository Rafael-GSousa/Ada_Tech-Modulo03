console.clear();

class Tarefa {
  constructor(descricao, prioridade, status) {
    this.descricao = descricao;
    this.prioridade = prioridade;
    this.status = status;
  }
}

class ListaTarefas {
  constructor(nome) {
    this.nome = nome;
    this.tarefas = [];
  }

  adicionarTarefa(tarefa) {
    this.tarefas.push(tarefa);
  }

  removerTarefa(tarefa) {
    const index = this.tarefas.indexOf(tarefa);
    if (index > -1) {
      this.tarefas.splice(index, 1);
    }
  }

  marcarConcluida(tarefa) {
    const index = this.tarefas.indexOf(tarefa);
    if (index > -1) {
      this.tarefas[index].status = "concluída";
    }
  }

  exibirLista() {
    return this.tarefas;
  }

  calcularEstatisticas() {
    let totalTarefas = this.tarefas.length;
    let tarefasConcluidas = this.tarefas.filter(
      (tarefa) => tarefa.status === "concluída"
    ).length;
    let tarefasPendentes = totalTarefas - tarefasConcluidas;

    return {
      totalTarefas,
      tarefasConcluidas,
      tarefasPendentes,
    };
  }
}

class AplicativoToDoList {
  constructor() {
    this.listasTarefas = [];
    this.listaAtual = null;
  }

  criarLista(nome) {
    const novaLista = new ListaTarefas(nome);
    this.listasTarefas.push(novaLista);
    this.listaAtual = novaLista;
  }

  selecionarLista(nome) {
    const listaSelecionada = this.listasTarefas.find(
      (lista) => lista.nome === nome
    );
    if (listaSelecionada) {
      this.listaAtual = listaSelecionada;
    }
  }

  exibirListasDisponiveis() {
    return this.listasTarefas.map((lista) => lista.nome);
  }
}

const tarefa1 = new Tarefa("Estudar JavaScript", "alta", "pendente");
const tarefa2 = new Tarefa("Fazer exercícios de POO", "média", "pendente");

const lista1 = new ListaTarefas("Trabalho");
lista1.adicionarTarefa(tarefa1);
lista1.adicionarTarefa(tarefa2);

const tarefa3 = new Tarefa("Comprar mantimentos", "baixa", "pendente");
const tarefa4 = new Tarefa("Correr no parque", "média", "concluida");

const lista2 = new ListaTarefas("Pessoal");
lista2.adicionarTarefa(tarefa3);
lista2.adicionarTarefa(tarefa4);

const appToDoList = new AplicativoToDoList();
appToDoList.listasTarefas.push(lista1);
appToDoList.listasTarefas.push(lista2);
appToDoList.criarLista("Estudos");
appToDoList.selecionarLista("Estudos");
appToDoList.listaAtual.adicionarTarefa(
  new Tarefa("Ler livro", "média", "concluída")
);
appToDoList.listaAtual.adicionarTarefa(
  new Tarefa("Fazer os exercícios", "alta", "pendente")
);

// Exibir listas disponíveis
console.log(appToDoList.exibirListasDisponiveis(), "\n");

// Exibir lista de tarefas atual
console.log(appToDoList.listaAtual.exibirLista(), "\n");

// Marcar tarefa como concluída
appToDoList.listaAtual.marcarConcluida(tarefa1);

// Exibir estatísticas da lista
console.log(appToDoList.listaAtual.calcularEstatisticas(), "\n");

// selecionando a lista Trabalho e removendo a tarefa1
appToDoList.selecionarLista("Trabalho");
appToDoList.listaAtual.removerTarefa(tarefa1);

// Este código irá imprimir o nome de cada lista, juntamente com a descrição, prioridade e status de cada tarefa dentro da lista
appToDoList.listasTarefas.forEach((lista) => {
  console.log(`\nNome da Lista: ${lista.nome}`);
  lista.tarefas.forEach((tarefa, index) => {
    console.log(
      `Tarefa ${index + 1}: ${tarefa.descricao}, Prioridade: ${
        tarefa.prioridade
      }, Status: ${tarefa.status}`
    );
  });
});
