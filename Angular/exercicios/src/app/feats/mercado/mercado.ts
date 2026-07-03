import { Component } from '@angular/core';
import { ItMercado } from './it-mercado';

@Component({
  selector: 'app-mercado',
  imports: [],
  templateUrl: './mercado.html',
  styleUrl: './mercado.css',
})
export class Mercado {
  apr: ItMercado = {
    nome: "Unidade de Blumenau",
    macasVendidas: 1000,
    precoMaca: "R$ 2,50",
    laranjasVendidas: 800,
    precoLaranja: "R$ 3,00"
  }
  apr1: ItMercado = {
    nome: "Unidade de Joinville",
    macasVendidas: 1200, 
    precoMaca: "R$ 2,30",
    laranjasVendidas: 900,
    precoLaranja: "R$ 2,80"
  } 
  apr2: ItMercado = {
    nome: "Unidade de FLorianopolis",
    macasVendidas: 900,
    precoMaca: "R$ 2,70",
    laranjasVendidas: 700,
    precoLaranja: "R$ 3,20"
  }
}
