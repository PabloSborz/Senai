import { Component } from '@angular/core';
import { ItIntroducao } from './it-introducao';

@Component({
  selector: 'app-introducao',
  imports: [],
  templateUrl: './introducao.html',
  styleUrl: './introducao.css',
})
export class Introducao {
  ap: ItIntroducao = {
    nome: "Pablo",
    idade: 21
  }
}
