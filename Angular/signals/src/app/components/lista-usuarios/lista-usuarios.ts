import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.html',
  styleUrl: './lista-usuarios.css',
})
export class ListaUsuarios {
  protected readonly usuarios: readonly Usuario[] = [
    { id: 1, nome: 'Ana Souza', idade: 28 },
    { id: 2, nome: 'Bruno Lima', idade: 34 },
    { id: 3, nome: 'Carla Mendes', idade: 22 },
  ];
}
