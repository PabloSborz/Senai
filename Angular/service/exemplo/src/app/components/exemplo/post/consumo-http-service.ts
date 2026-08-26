import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { PostRequestInt } from './post-request/post-request-int';
import { PutRequestInt } from './put-request/put-request-int';
import { PostResponce } from './post-request/post-responce';

@Service()
export class ConsumoHttpService {
    private readonly httpClient = inject(HttpClient);

    private readonly urlApi = 'https://jsonplaceholder.typicode.com/posts';

    
    cadastrarPostDoService(postCadastrado: PostRequestInt) {
        return this.httpClient.post<PostResponce>(this.urlApi, postCadastrado);
    }

    atualizarPutDoService(putAtualizado: PutRequestInt) {
        return this.httpClient.put<PutRequestInt>(
            `${this.urlApi}/${putAtualizado.userId}`,
            putAtualizado
        );
    }

    deleteService(id: number) {
        return this.httpClient.delete(`${this.urlApi}/${id}`);
    }
}
