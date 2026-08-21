import { Injectable, signal } from '@angular/core';
import { PushInt } from './push-int';

@Injectable({ providedIn: 'root' })
export class PushService {
  usuarios = signal<PushInt[]>([]);
  private proximoId = 1;
    
      cadastrarUsuario(usuario: Omit<PushInt, 'id'>) {
        const novoUsuario: PushInt = {
          id: this.proximoId++,
          ...usuario,
        };
    
        this.usuarios.update((valor) => [...valor, novoUsuario]);

    }
}
