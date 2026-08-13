import { Component, signal } from '@angular/core';
import { Produto } from './produto';
import { form, FormField, required } from '@angular/forms/signals';

@Component({
  selector: 'app-mercado',
  imports: [FormField],
  templateUrl: './mercado.html',
  styleUrl: './mercado.css',
})
export class Mercado {

 
  // Controla o modal de confirmação mostrado após o cadastro.
  alertaVisivel = signal(false);
  produtoCadastrado = signal('');

  // Modelo reativo conectado aos inputs por meio de [formField].
  protected readonly produtoModel = signal<Produto>({
    titulo: '',
    descricao: '',
    preco: '',
  });


  // Converte o modelo em uma estrutura compatível com Angular Signal Forms.
  produtoForm = form(this.produtoModel);

  produto = signal<Produto[]>([])

  cadastrarProduto(evento: SubmitEvent): void {
    evento.preventDefault();

    const produto = this.produtoModel();

    // Guarda o título para exibi-lo no alerta personalizado.
    this.produtoCadastrado.set(produto.titulo);
    this.alertaVisivel.set(true);
    this.produto.update(valor => [...valor, produto]);

    // Limpa todos os inputs após concluir o cadastro.
    this.produtoModel.set({
      titulo: '',
      descricao: '',
      preco: '',
    });
  }

  fecharAlerta(): void {
    this.alertaVisivel.set(false);
  }

  

}
