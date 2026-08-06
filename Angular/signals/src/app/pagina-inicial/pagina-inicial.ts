import { Component } from '@angular/core';
import { Autenticacao } from '../components/autenticacao/autenticacao';
import { CadastroAlunos } from '../components/cadastro-alunos/cadastro-alunos';
import { CadastroUsuarios } from '../components/cadastro-usuarios/cadastro-usuarios';
import { Contador } from '../components/contador/contador';
import { ListaUsuarios } from '../components/lista-usuarios/lista-usuarios';
import { VisualizadorImagem } from '../components/visualizador-imagem/visualizador-imagem';

@Component({
  selector: 'app-pagina-inicial',
  // Componentes que formam as seções exibidas na página inicial.
  imports: [
    Autenticacao,
    CadastroAlunos,
    CadastroUsuarios,
    Contador,
    ListaUsuarios,
    VisualizadorImagem,
  ],
  templateUrl: './pagina-inicial.html',
  styleUrl: './pagina-inicial.css',
})
export class PaginaInicial {}
