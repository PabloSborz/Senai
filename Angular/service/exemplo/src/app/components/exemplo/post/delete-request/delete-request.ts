import { Component, inject, signal } from '@angular/core';
import { ConsumoHttpService } from '../consumo-http-service';
import { DeleteRequestInt } from './delete-request-int';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-delete-request',
  imports: [FormField],
  templateUrl: './delete-request.html',
  styleUrl: './delete-request.css',
})
export class DeleteRequest {
  protected readonly consumoService = inject(ConsumoHttpService);

  protected readonly deleteModel = signal<DeleteRequestInt>({
    id: null
  });

  protected readonly deleteForm = form(this.deleteModel);

  protected deleteService(event: SubmitEvent) {
    event.preventDefault();

    const deleteRequest = this.deleteModel();

    if (deleteRequest.id === null) {
      alert('Informe o ID que deseja excluir.');
      return;
    }

    this.consumoService.deleteService(deleteRequest.id).subscribe({
      next: () => {
        alert('Delete realizado com sucesso!');

        this.deleteModel.set({
          id: null
        });

        this.deleteForm().reset();
      },
      error: () => {
        alert('Erro ao realizar o delete. Verifique o console para mais detalhes.');
      }
    });
  }
}
