import { Routes } from '@angular/router';
import { Home } from './feats/home/home';
import { Contato } from './feats/contato/contato';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'contato', component: Contato},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
];
