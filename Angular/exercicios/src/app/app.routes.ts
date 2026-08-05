import { Routes } from '@angular/router';
import { Contato } from './feats/contato/contato';
import { Home } from './feats/home/home';
import { Introducao } from './feats/introducao/introducao';
import { Pessoa } from './feats/pessoa/pessoa';
import { Mercado } from './feats/mercado/mercado';
import { ContadorFeat } from './feats/contador/contador';
import { Auth } from './feats/auth/auth';
import { Imagem } from './feats/imagem/imagem';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'contato', component: Contato },
  { path: 'contador', component: ContadorFeat },
  { path: 'auth', component: Auth },
  { path: 'imagem', component: Imagem },
  { path: 'introducao', component: Introducao },
  { path: 'pessoa', component: Pessoa },
  { path: 'mercado', component: Mercado },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
