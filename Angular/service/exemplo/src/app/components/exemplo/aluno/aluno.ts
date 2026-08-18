import { Component, inject, signal } from '@angular/core';
import { form, FormField, max, min, required } from '@angular/forms/signals';
import { AlunoService } from './aluno-service';
import { Aluno as AlunoInt } from './aluno-int';

@Component({
  selector: 'app-aluno',
  imports: [FormField],
  templateUrl: './aluno.html',
  styleUrl: './aluno.css',
})
export class Aluno {

   protected readonly alunoService = inject(AlunoService);

  // Fonte da verdade
  // Signal que guarda o estado atual dos dados do formulário.
  // Qualquer alteração no formulário atualiza este signal automaticamente.
  protected alunoModel = signal<AlunoInt>({
    nome: '',
    media: null
  });

  // Cria a instância do formulário reativo baseado em signals.
  // O segundo parâmetro é uma função de configuração onde definimos as validações.  
  protected alunoForm = form(this.alunoModel, (s) => {
    // Campo nome: obrigatório
    required(s.nome, { message: 'O nome do aluno é obrigatório' });

    // Campo média: obrigatório + intervalo entre 0 e 10
    required(s.media, { message: 'A média é obrigatória' });
    min(s.media, 0, { message: 'Média não pode ser menor do que 0' });
    max(s.media, 10, { message: 'Média não pode ser maior do que 10' });
  });

  

  // Método chamado no submit do formulário
  protected cadastrarAluno(event: SubmitEvent) {
    event.preventDefault();

    // Lê o valor atual do model (já sincronizado com o formulário)
    const aluno = this.alunoModel();

    // Adiciona o novo aluno na lista de forma imutável
    this.alunoService.cadastrarAluno(aluno);

    // Limpa o model (volta ao estado inicial)
    this.alunoModel.set({
      nome: '',
      media: null
    });

    // Reseta o estado do formulário (touched, dirty, errors etc.)
    this.alunoForm().reset();
  }
  
}
