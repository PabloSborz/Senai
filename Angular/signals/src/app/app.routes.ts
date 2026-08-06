import { Routes } from '@angular/router';
import { Mercado } from './feats/mercado/mercado';
import { PaginaInicial } from './pagina-inicial/pagina-inicial';

// Mapa de URLs da aplicação. Adicione novas páginas neste array.
export const routes: Routes = [
  // Página exibida ao acessar http://localhost:4200.
  { path: '', component: PaginaInicial },
  // Página independente do formulário de produtos.
  { path: 'mercado', component: Mercado },
  // Qualquer endereço desconhecido volta para a página inicial.
  { path: '**', redirectTo: '' },
];
