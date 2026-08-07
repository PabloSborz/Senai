import { Component, signal } from '@angular/core';

interface Tarefa {
  id: number;
  nome: string;
  concluida: boolean;
}

@Component({
  selector: 'app-lista-tarefas',
  imports: [],
  templateUrl: './lista-tarefas.html',
  styleUrl: './lista-tarefas.css',
})
export class ListaTarefas {
  tarefas = signal<Tarefa[]>([]);
  novaTarefa = signal('');
  tarefaEmEdicaoId = signal<number | null>(null);
  textoEdicao = signal('');

  atualizarNovaTarefa(evento: Event): void {
    this.novaTarefa.set((evento.target as HTMLInputElement).value);
  }

  adicionarTarefa(evento: SubmitEvent): void {
    evento.preventDefault();
    const nome = this.novaTarefa().trim();
    if (!nome) return;

    this.tarefas.update((lista) => [
      ...lista,
      { id: Date.now(), nome, concluida: false },
    ]);
    this.novaTarefa.set('');
  }

  alternarConclusao(id: number): void {
    this.tarefas.update((lista) => lista.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa,
    ));
  }

  iniciarEdicao(tarefa: Tarefa): void {
    this.tarefaEmEdicaoId.set(tarefa.id);
    this.textoEdicao.set(tarefa.nome);
  }

  atualizarTextoEdicao(evento: Event): void {
    this.textoEdicao.set((evento.target as HTMLInputElement).value);
  }

  salvarEdicao(id: number): void {
    const nome = this.textoEdicao().trim();
    if (!nome) return;

    this.tarefas.update((lista) => lista.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, nome } : tarefa,
    ));
    this.cancelarEdicao();
  }

  cancelarEdicao(): void {
    this.tarefaEmEdicaoId.set(null);
    this.textoEdicao.set('');
  }

  removerTarefa(id: number): void {
    this.tarefas.update((lista) => lista.filter((tarefa) => tarefa.id !== id));
    if (this.tarefaEmEdicaoId() === id) this.cancelarEdicao();
  }
}
