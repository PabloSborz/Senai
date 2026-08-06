import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-visualizador-imagem',
  templateUrl: './visualizador-imagem.html',
  styleUrl: './visualizador-imagem.css',
})
export class VisualizadorImagem {
  // URL digitada pelo usuário e utilizada no atributo src da imagem.
  protected readonly urlImagem = signal('');

  protected atualizarUrl(evento: Event): void {
    // trim remove espaços acidentais do início e do fim da URL.
    const campoUrl = evento.target as HTMLInputElement;
    this.urlImagem.set(campoUrl.value.trim());
  }
}
