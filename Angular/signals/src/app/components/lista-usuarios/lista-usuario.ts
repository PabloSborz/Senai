import { Injectable, signal } from '@angular/core';

export interface ListaUsuario {
  id: number;
  nome: string;
  idade: number;
}

// Serviço compartilhado responsável por armazenar e modificar os usuários.
@Injectable({ providedIn: 'root' })
export class ListaUsuarioService {
  // Fonte única dos dados exibidos pelo @for da tabela.
  readonly ListaUsuario = signal<readonly ListaUsuario[]>([]);

  adicionar(nome: string, idade: number): void {
    // A comparação ignora letras maiúsculas e minúsculas para evitar duplicados.
    const usuarioJaExiste = this.ListaUsuario().some(
      (usuario) => usuario.nome.toLowerCase() === nome.toLowerCase(),
    );

    if (!usuarioJaExiste) {
      this.ListaUsuario.update((usuarios) => [
        ...usuarios,
        { id: usuarios.length + 1, nome, idade },
      ]);
    }
  }

  excluir(id: number): void {
    // Remove o item escolhido e reorganiza os IDs para 1, 2, 3...
    this.ListaUsuario.update((usuarios) =>
      usuarios
        .filter((usuario) => usuario.id !== id)
        .map((usuario, indice) => ({ ...usuario, id: indice + 1 })),
    );
  }
}
