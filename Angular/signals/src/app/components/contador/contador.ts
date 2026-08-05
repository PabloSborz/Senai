import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})
export class Contador {
  protected readonly valor = signal(0);

  protected incrementar(): void {
    this.valor.update((valorAtual) => valorAtual + 1);
  }

  protected resetar(): void {
    this.valor.set(0);
  }
}
