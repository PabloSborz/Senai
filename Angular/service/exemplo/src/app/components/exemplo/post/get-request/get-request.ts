import { Component, inject } from '@angular/core';
import { ConsumoHttpService } from '../consumo-http-service';


@Component({
  selector: 'app-get-request',
  imports: [],
  templateUrl: './get-request.html',
  styleUrl: './get-request.css',
})
export class GetRequest {
   protected readonly consumoService = inject(ConsumoHttpService);

}
