import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Introducao } from "./feats/introducao/introducao";
import { Pessoa } from "./feats/pessoa/pessoa";
import { Mercado } from "./feats/mercado/mercado";
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exercicios');
}
