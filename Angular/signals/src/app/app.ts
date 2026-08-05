import { Component } from '@angular/core';
import { Autenticacao } from './components/autenticacao/autenticacao';
import { Contador } from './components/contador/contador';
import { ListaUsuarios } from './components/lista-usuarios/lista-usuarios';
import { VisualizadorImagem } from './components/visualizador-imagem/visualizador-imagem';

@Component({
  selector: 'app-root',
  imports: [Autenticacao, Contador, ListaUsuarios, VisualizadorImagem],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
