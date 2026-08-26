import { Component, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { ConsumoHttpService } from '../consumo-http-service';
import { PostRequestInt } from './post-request-int';

@Component({
  selector: 'app-post-request',
  imports: [FormField],
  templateUrl: './post-request.html',
  styleUrl: './post-request.css',
})
export class PostRequest {

  protected readonly consumoService = inject(ConsumoHttpService);

  protected readonly postModel = signal<PostRequestInt>({
    id: null,
    userId: null,
    title: '',
    body: ''
  });

  protected readonly postForm = form(this.postModel);

  protected cadastrarPost(event: SubmitEvent) {
    event.preventDefault();

    const post = this.postModel();

    this.consumoService.cadastrarPostDoService(post).subscribe({
      next: (responce) => {
        alert('Post cadastrado!' + responce.id + ' - ' + responce.title);

        this.postModel.set({
          id: null,
          userId: null,
          title: '',
          body: ''
        });

        this.postForm().reset();
      },

        error: () => {
          alert('Erro ao cadastrar post. Verifique o console para mais detalhes.');
        }

    });
  }
}
