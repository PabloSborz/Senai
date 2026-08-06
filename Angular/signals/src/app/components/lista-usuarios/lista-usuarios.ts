import { Component, inject, signal } from '@angular/core';
import { ListaUsuarioService } from './lista-usuario';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.html',
  styleUrl: './lista-usuarios.css',
})
export class ListaUsuarios {
  // O serviço mantém a lista separada da interface visual do componente.
  private readonly usuariosService = inject(ListaUsuarioService);

  // Signals usados pelo template e pelo modal de cadastro.
  protected readonly usuarios = this.usuariosService.ListaUsuario;
  protected readonly modalAberto = signal(false);
  protected readonly nome = signal('');
  protected readonly idade = signal('');
  protected readonly mensagemErro = signal('');

  protected abrirCadastro(): void {
    // Sempre abre o modal com os campos e erros limpos.
    this.nome.set('');
    this.idade.set('');
    this.mensagemErro.set('');
    this.modalAberto.set(true);
  }

  protected fecharCadastro(): void {
    this.modalAberto.set(false);
  }

  protected atualizarNome(evento: Event): void {
    this.nome.set((evento.target as HTMLInputElement).value);
  }

  protected atualizarIdade(evento: Event): void {
    this.idade.set((evento.target as HTMLInputElement).value);
  }

  protected excluirUsuario(id: number): void {
    this.usuariosService.excluir(id);
  }

  protected cadastrarUsuario(evento: Event): void {
    evento.preventDefault();
    const nome = this.nome().trim();
    const idade = Number(this.idade());

    // Valida os valores antes de enviá-los ao serviço.
    if (!nome) {
      this.mensagemErro.set('Digite um nome válido.');
      return;
    }

    if (!Number.isInteger(idade) || idade <= 0) {
      this.mensagemErro.set('Digite uma idade válida.');
      return;
    }

    // Coloca a primeira letra de cada parte do nome em maiúscula.
    const nomeFormatado = nome
      .split(/\s+/)
      .map(
        (parte) =>
          parte.charAt(0).toLocaleUpperCase('pt-BR') + parte.slice(1).toLocaleLowerCase('pt-BR'),
      )
      .join(' ');

    this.usuariosService.adicionar(nomeFormatado, idade);
    this.fecharCadastro();
  }
}
