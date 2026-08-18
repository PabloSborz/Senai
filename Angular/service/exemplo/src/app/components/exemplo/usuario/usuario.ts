import { Component, inject, signal } from '@angular/core';
import { form, FormField, max, min, required } from '@angular/forms/signals';

import { UsuarioInt } from './usuario-int';
import { UsuarioService } from './usuario-service';

@Component({
  selector: 'app-usuario',
  imports: [FormField],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
  protected readonly usuarioService = inject(UsuarioService);

  protected usuarioModel = signal<Omit<UsuarioInt, 'id'>>({
    nome: '',
    idade: null,
  });


  protected usuarioForm = form(this.usuarioModel, (s) => {
    // Campo nome: obrigatório
    required(s.nome, { message: 'O nome do usuário é obrigatório' });

    // Campo idade: obrigatório + intervalo entre 0 e 120
    required(s.idade, { message: 'A idade é obrigatória' });
    min(s.idade, 0, { message: 'Idade não pode ser menor do que 0' });
    max(s.idade, 120, { message: 'Idade não pode ser maior do que 120' });
  });

  // Método chamado no submit do formulário
  protected cadastrarUsuario(event: SubmitEvent) {
    event.preventDefault();

    // Lê o valor atual do model (já sincronizado com o formulário)
    const usuario = this.usuarioModel();

    // Adiciona o novo usuário na lista de forma imutável
    this.usuarioService.cadastrarUsuario(usuario);

    // Limpa o model (volta ao estado inicial)
    this.usuarioModel.set({
      nome: '',
      idade: null,
    });

    // Reseta o estado do formulário (touched, dirty, errors etc.)
    this.usuarioForm().reset();
  }
}
