import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Introducao } from "./introducao/introducao";
import { Pessoa } from "./pessoa/pessoa";
import { Mercado } from "./mercado/mercado";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Introducao, Pessoa, Mercado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exercicios');
}
