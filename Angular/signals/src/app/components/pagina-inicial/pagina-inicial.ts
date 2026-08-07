import { Component } from '@angular/core';
import { Autenticacao } from '../autenticacao/autenticacao';
import { CadastroAlunos } from '../cadastro-alunos/cadastro-alunos';
import { CadastroUsuarios } from '../cadastro-usuarios/cadastro-usuarios';
import { Contador } from '../contador/contador';
import { ListaUsuarios } from '../lista-usuarios/lista-usuarios';
import { VisualizadorImagem } from '../visualizador-imagem/visualizador-imagem';
import { Eleicao } from "../eleicao/eleicao";
import { ListaTarefas } from '../lista-tarefas/lista-tarefas';


@Component({
  selector: 'app-pagina-inicial',
  imports: [
    Autenticacao,
    CadastroAlunos,
    CadastroUsuarios,
    Contador,
    ListaUsuarios,
    VisualizadorImagem,
    Eleicao,
    ListaTarefas,
  ],
  templateUrl: './pagina-inicial.html',
  styleUrl: './pagina-inicial.css',
})
export class PaginaInicial {}
