import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Usuario } from './components/exemplo/usuario/usuario';
import { Aluno } from './components/exemplo/aluno/aluno';
import { Header } from "./components/header/header";
import { Autenticacao } from './components/exemplo/autenticacao/autenticacao';
import {Contador} from './components/exemplo/contador/contador';
import { Login } from './components/exemplo/login/login';
import { Imagem } from './components/exemplo/imagem/imagem';
import { PostRequest } from "./components/exemplo/post/post-request/post-request";
import { PutRequest } from './components/exemplo/post/put-request/put-request';
import { DeleteRequest } from "./components/exemplo/post/delete-request/delete-request";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Usuario, Aluno, Header, Autenticacao, Contador, Imagem, Login, PostRequest, PutRequest, DeleteRequest],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
