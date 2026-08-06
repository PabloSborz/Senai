import { Component, signal } from '@angular/core';

interface UsuarioCadastrado {
  id: number | null;
  nome: string;
  email: string;
  nascimento: string;
}

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.html',
  styleUrl: './cadastro-usuarios.css',
})
export class CadastroUsuarios {
  // Signals ligados aos campos do formulário.
  protected readonly nome = signal('');
  protected readonly email = signal('');
  protected readonly senha = signal('');
  protected readonly confirmacao = signal('');
  protected readonly nascimento = signal('');
  protected readonly erro = signal('');
  // Array reativo usado para gerar os cards de usuários no template.
  protected readonly usuarios = signal<readonly UsuarioCadastrado[]>([]);
  // Impede que o usuário escolha uma data posterior ao dia atual.
  protected readonly dataMaxima = new Date().toISOString().slice(0, 10);

  protected atualizar(
    campo: 'nome' | 'email' | 'senha' | 'confirmacao' | 'nascimento',
    evento: Event,
  ): void {
    const valor = (evento.target as HTMLInputElement).value;
    this.erro.set('');
    // Seleciona o signal correto sem criar uma função para cada input.
    ({
      nome: this.nome,
      email: this.email,
      senha: this.senha,
      confirmacao: this.confirmacao,
      nascimento: this.nascimento,
    })[campo].set(valor);
  }

  protected cadastrar(evento: Event): void {
    evento.preventDefault();
    const nome = this.nome().trim();
    const email = this.email().trim().toLowerCase();
    const nascimento = this.nascimento();

    // As validações ficam reunidas aqui para facilitar futuras alterações.
    if (!nome || !email || !this.senha() || !this.confirmacao() || !nascimento) {
      this.erro.set('Preencha todos os campos obrigatórios.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this.erro.set('Digite um e-mail válido.');
      return;
    }
    if (this.senha().length < 6) {
      this.erro.set('A senha deve possuir pelo menos 6 caracteres.');
      return;
    }
    if (this.senha() !== this.confirmacao()) {
      this.erro.set('A senha e a confirmação devem ser iguais.');
      return;
    }
    if (nascimento > this.dataMaxima || Number.isNaN(Date.parse(`${nascimento}T00:00:00`))) {
      this.erro.set('Digite uma data de nascimento válida.');
      return;
    }
    if (this.usuarios().some((usuario) => usuario.email === email)) {
      this.erro.set('Este e-mail já está cadastrado.');
      return;
    }

    const nomeFormatado = nome
      .split(/\s+/)
      .map(
        (parte) => parte[0].toLocaleUpperCase('pt-BR') + parte.slice(1).toLocaleLowerCase('pt-BR'),
      )
      .join(' ');

    // A senha não é armazenada nem exibida no card.
    this.usuarios.update((usuarios) => [
      ...usuarios,
      { id: usuarios.length + 1, nome: nomeFormatado, email, nascimento },
    ]);
    this.nome.set('');
    this.email.set('');
    this.senha.set('');
    this.confirmacao.set('');
    this.nascimento.set('');
  }

  protected formatarData(data: string): string {
    return data.split('-').reverse().join('/');
  }
}
