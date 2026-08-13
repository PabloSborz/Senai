import { Component, signal } from '@angular/core';
import { FormField } from "@angular/forms/signals";

// Credenciais usadas somente na demonstração local.
const CREDENCIAIS_CORRETAS = {
  nomeUsuario: 'admin',
  senha: 'senai123',
} as const;

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.html',
  styleUrl: './autenticacao.css',
  imports: [FormField],
})
export class Autenticacao {
  // Estado reativo dos campos e do resultado da autenticação.
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
    // Evita que o navegador recarregue a página ao enviar o formulário.
    evento.preventDefault();

    // Altere esta regra quando a autenticação passar a usar uma API.
    const credenciaisValidas =
      this.nomeUsuario() === CREDENCIAIS_CORRETAS.nomeUsuario &&
      this.senha() === CREDENCIAIS_CORRETAS.senha;

    this.usuarioLogado.set(credenciaisValidas);
    this.loginInvalido.set(!credenciaisValidas);

  }
  
}
