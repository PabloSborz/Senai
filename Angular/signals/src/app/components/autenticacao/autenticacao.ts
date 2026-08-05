import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.html',
  styleUrl: './autenticacao.css',
})
export class Autenticacao {
  protected readonly usuarioLogado = signal(false);

  protected alternarLogin(): void {
    this.usuarioLogado.update((estaLogado) => !estaLogado);
  }
}
