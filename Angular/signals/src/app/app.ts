<<<<<<< HEAD
import { Component } from '@angular/core';
import { Autenticacao } from './components/autenticacao/autenticacao';
import { Contador } from './components/contador/contador';
import { VisualizadorImagem } from './components/visualizador-imagem/visualizador-imagem';

@Component({
  selector: 'app-root',
  imports: [Autenticacao, Contador, VisualizadorImagem],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
=======
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('signals');
}
>>>>>>> 915e5cb28d86ef310dc20de3daf91be0e3e1c7a3
