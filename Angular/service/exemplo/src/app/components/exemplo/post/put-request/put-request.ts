import { Component, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { ConsumoHttpService } from '../consumo-http-service';
import { PutRequestInt } from './put-request-int';

@Component({
  selector: 'app-put-request',
  imports: [FormField],
  templateUrl: './put-request.html',
  styleUrl: './put-request.css',
})
export class PutRequest {
  protected readonly consumoService = inject(ConsumoHttpService);

  protected readonly putModel = signal<PutRequestInt>({
    userId: null,
    title: '',
    body: ''
  });

  protected readonly putForm = form(this.putModel);

  protected atualizarPutService(event: SubmitEvent) {
    event.preventDefault();

    const put = this.putModel();

    if (put.userId === null) {
      alert('Informe o UserId que deseja atualizar.');
      return;
    }

    this.consumoService.atualizarPutDoService(this.putModel()).subscribe({
      next: () => {
        alert('Put realizado com sucesso!');

        this.putModel.set({
          userId: null,
          title: '',
          body: ''
        });

        this.putForm().reset();
      },
      error: () => {
        alert('Erro ao realizar o put. Verifique o console para mais detalhes.');
      }
    });
  }
}
