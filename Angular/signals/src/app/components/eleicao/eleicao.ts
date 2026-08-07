import { Component, signal } from '@angular/core';
import { EleicaoIt } from './eleicao-it';

@Component({
  selector: 'app-eleicao',
  imports: [],
  templateUrl: './eleicao.html',
  styleUrl: './eleicao.css',
})
export class Eleicao {
  candidatos = signal<EleicaoIt[]>([
    { id: 1, nome: 'Ana Silva', foto: '/candidata2.webp', votos: 0 },
    { id: 2, nome: 'Bruno Santos', foto: '/canditado.webp', votos: 0 },
    { id: 3, nome: 'Carla Oliveira', foto: '/canditada.webp', votos: 0 },
  ]);

  votar(id: number): void {
    this.candidatos.update((lista) =>
      lista.map((candidato) =>
        candidato.id === id
          ? { ...candidato, votos: candidato.votos + 1 }
          : candidato,
      ),
    );
  }

  ordenarLista(): void {
    this.candidatos.update((lista) =>
      [...lista].sort((a, b) => b.votos - a.votos),
    );
  }
}
