import { Component, signal } from '@angular/core';

const CREDENCIAIS_CORRETAS = {
  nomeUsuario: 'admin',
  senha: 'senai123',
} as const;

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.html',
  styleUrl: './autenticacao.css',
})
export class Autenticacao {
  protected readonly nomeUsuario = signal('');
  protected readonly senha = signal('');
  protected readonly usuarioLogado = signal(false);
  protected readonly loginInvalido = signal(false);

  protected atualizarNomeUsuario(evento: Event): void {
    this.nomeUsuario.set((evento.target as HTMLInputElement).value);
  }

  protected atualizarSenha(evento: Event): void {
    this.senha.set((evento.target as HTMLInputElement).value);
  }

  protected realizarLogin(evento: Event): void {
    evento.preventDefault();

    const credenciaisValidas =
      this.nomeUsuario() === CREDENCIAIS_CORRETAS.nomeUsuario &&
      this.senha() === CREDENCIAIS_CORRETAS.senha;

    this.usuarioLogado.set(credenciaisValidas);
    this.loginInvalido.set(!credenciaisValidas);
  }
}
