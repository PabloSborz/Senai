import { Component, signal } from '@angular/core';

interface Aluno {
  id: number;
  nome: string;
  media: number;
}

@Component({
  selector: 'app-cadastro-alunos',
  templateUrl: './cadastro-alunos.html',
  styleUrl: './cadastro-alunos.css',
})
export class CadastroAlunos {
  // Estado do formulário, mensagens e alunos cadastrados na sessão atual.
  protected readonly nome = signal('');
  protected readonly media = signal('');
  protected readonly alunos = signal<readonly Aluno[]>([]);
  protected readonly mensagemErro = signal('');

  protected atualizarNome(evento: Event): void {
    this.nome.set((evento.target as HTMLInputElement).value);
    this.mensagemErro.set('');
  }

  protected atualizarMedia(evento: Event): void {
    this.media.set((evento.target as HTMLInputElement).value);
    this.mensagemErro.set('');
  }

  protected cadastrar(evento: Event): void {
    evento.preventDefault();

    const nome = this.nome().trim();
    const mediaInformada = this.media().trim();
    const media = Number(mediaInformada);

    // Campos vazios e médias fora de 0 a 10 não são cadastrados.
    if (!nome || !mediaInformada) {
      this.mensagemErro.set('Preencha o nome e a média do aluno.');
      return;
    }

    if (!Number.isFinite(media) || media < 0 || media > 10) {
      this.mensagemErro.set('A média deve estar entre 0 e 10.');
      return;
    }

    const nomeFormatado = nome
      .split(/\s+/)
      .map(
        (parte) =>
          parte.charAt(0).toLocaleUpperCase('pt-BR') + parte.slice(1).toLocaleLowerCase('pt-BR'),
      )
      .join(' ');

    // Cria um novo array para o signal avisar o Angular sobre a mudança.
    this.alunos.update((alunos) => [
      ...alunos,
      { id: alunos.length + 1, nome: nomeFormatado, media },
    ]);

    // Limpa o formulário depois de um cadastro válido.
    this.nome.set('');
    this.media.set('');
    this.mensagemErro.set('');
  }
}
