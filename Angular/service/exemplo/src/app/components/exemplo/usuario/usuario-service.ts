import { Injectable, signal } from '@angular/core';

import { UsuarioInt } from './usuario-int';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
 
  usuarios = signal<UsuarioInt[]>([]);
  private proximoId = 1;

  cadastrarUsuario(usuario: Omit<UsuarioInt, 'id'>) {
    const novoUsuario: UsuarioInt = {
      id: this.proximoId++,
      ...usuario,
    };

    this.usuarios.update((valor) => [...valor, novoUsuario]);
  }
}
