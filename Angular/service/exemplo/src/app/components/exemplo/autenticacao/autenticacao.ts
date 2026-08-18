import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-autenticacao',
  imports: [],
  templateUrl: './autenticacao.html',
  styleUrl: './autenticacao.css',
})
export class Autenticacao {

   // protected logado = false;

  protected logado = signal<boolean>(false);

  protected alterarEstado() {
    this.logado.update(estado => !estado);
  }
  
}
