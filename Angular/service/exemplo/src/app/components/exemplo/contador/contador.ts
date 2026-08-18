import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})
export class Contador {
   // protected contador: number = 0;

  protected contador = signal<number>(0);

  private limiteImposto = 10;

  protected incrementarValor() {
    this.contador.update(valor => valor + 1)
    this.checarValor();
  }

  private checarValor() {
    if (this.contador() > this.limiteImposto) {
      this.contador.set(0)
    }
  }

  protected redefinirValor() {
    this.contador.set(0)
  }
}
