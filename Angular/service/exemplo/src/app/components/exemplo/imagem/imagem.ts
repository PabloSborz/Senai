import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imagem',
  imports: [FormsModule],
  templateUrl: './imagem.html',
  styleUrl: './imagem.css',
})
export class Imagem {
  protected urlImagem = signal<string>('');
}
