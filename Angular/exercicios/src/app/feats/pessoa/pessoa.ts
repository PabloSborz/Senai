import { Component } from '@angular/core';
import { ItPessoa } from './it-pessoa';

@Component({
  selector: 'app-pessoa',
  imports: [],
  templateUrl: './pessoa.html',
  styleUrl: './pessoa.css',
})
export class Pessoa {
  apr: ItPessoa = {
    nome: "Pablo",
    sexo: "Masculino",
    dataNascimento: "16/02/2005",
    estadoCivil: "Solteiro",
  }
  apr1: ItPessoa = {
    nome: "joao",
    sexo: "Masculino",
    dataNascimento: "16/02/2005",
    estadoCivil: "Solteiro"
  }
}
