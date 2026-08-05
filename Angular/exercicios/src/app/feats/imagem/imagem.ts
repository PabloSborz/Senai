import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-imagem',
  templateUrl: './imagem.html',
  styleUrl: './imagem.css',
})
export class Imagem {
  imageUrl = '';
  imageError = false;

  onLoad(): void {
    this.imageError = false;
  }

  onError(): void {
    this.imageError = true;
  }
}
