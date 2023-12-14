console.clear();

class SistemaDeLogin {
  usuarios;

  constructor() {
    this.usuarios = [];
  }

  cadastrarUsuario(nome, senha) {
    const validaUsuarioNovo = this.usuarios.find(
      (usuario) => usuario.nome === nome
    );
    if (!validaUsuarioNovo) {
      this.usuarios.push({
        nome: nome,
        senha: senha,
      });
    } else {
      throw new Error(`${nome} já existe no sistema!`);
    }
  }

  realizarLogin(nome, senha) {
    const validaUsuario = this.usuarios.find(
      (usuario) => usuario.nome === nome
    );

    if (!nome) {
      throw new Error("Nome de usuário não pode estar vazio!");
    }

    if (!senha) {
      throw new Error("Senha não pode estar vazia!");
    }

    if (!validaUsuario) {
      throw new Error("Nome de usuário incorreto!");
    }

    if (!(validaUsuario.senha === senha)) {
      throw new Error("Senha incorreta!");
    }

    console.log(`${nome} logado com sucesso!`);
    return nome;
  }

  exibirMensagemPersonalizada(nome) {
    return `Bem-vindo, ${nome}!`;
  }
}

try {
  // Criando instância do sistema de login
  const sistemaLogin = new SistemaDeLogin();

  // Cadastrando usuários
  sistemaLogin.cadastrarUsuario("usuario1", "senha123");
  sistemaLogin.cadastrarUsuario("usuario2", "abc456");
  // sistemaLogin.cadastrarUsuario("usuario2", "abc456");

  // Realizando login e exibindo mensagem personalizada
  const usuarioLogado = sistemaLogin.realizarLogin("usuario1", "senha123");
  console.log(sistemaLogin.exibirMensagemPersonalizada(usuarioLogado));
} catch (err) {
  console.error(err);
}
