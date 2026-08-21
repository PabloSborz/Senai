import { Component, inject, signal } from '@angular/core';
import { PushService } from './push-service';
import { PushInt } from './push-int';
import { form, FormField, required } from '@angular/forms/signals';


@Component({
  selector: 'app-push-test',
  imports: [FormField],
  templateUrl: './push-test.html',
  styleUrl: './push-test.css',
})
export class PushTest {
  protected readonly pushService = inject(PushService);

    protected userModel = signal<Omit<PushInt, 'id'>>({
    nome: ''
  });

   protected userForm = form(this.userModel, (s) => {
    // Campo nome: obrigatório
    required(s.nome, { message: 'O nome do usuário é obrigatório' });
  });
    
  protected cadastrarUsuario(event: SubmitEvent) {
    event.preventDefault();

    // Lê o valor atual do model (já sincronizado com o formulário)
     const usuario = this.userModel();

    // Adiciona o novo usuário na lista de forma imutável
    this.pushService.cadastrarUsuario(usuario);

    // Limpa o model (volta ao estado inicial)
    this.userModel.set({
      nome: ''
    });

    // Reseta o estado do formulário (touched, dirty, errors etc.)
    this.userForm().reset();
  
  
     }
}
