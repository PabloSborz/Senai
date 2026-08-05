import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-visualizador-imagem',
  templateUrl: './visualizador-imagem.html',
  styleUrl: './visualizador-imagem.css',
})
export class VisualizadorImagem {
  protected readonly urlImagem = signal('');

  protected atualizarUrl(evento: Event): void {
    const campoUrl = evento.target as HTMLInputElement;
    this.urlImagem.set(campoUrl.value.trim());
  }
}
