import { inject, Injectable, signal } from '@angular/core';
import { Aluno } from './aluno-int';

@Injectable({ providedIn: 'root' })
export class AlunoService {

    

    alunos = signal<Aluno[]>([]);

    cadastrarAluno(aluno: Aluno) {
        this.alunos.update(valor => [...valor, aluno]);
    }


}
