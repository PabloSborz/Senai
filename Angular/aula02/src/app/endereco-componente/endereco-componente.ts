import { Component } from '@angular/core';
import { Endereco } from './endereco';

@Component({
  selector: 'app-endereco-componente',
  imports: [],
  templateUrl: './endereco-componente.html',
  styleUrl: './endereco-componente.css',
})
export class EnderecoComponente {

  senai: Endereco = {
    cep: '89030-000',
    rua: 'Rua Sao Paulo',
    num: 111,
    bairro: 'Victor Konder',
    cidade: 'Blumenau',
    estado: 'Santa Catarina',
    pais: 'Brasil'

  }

}
