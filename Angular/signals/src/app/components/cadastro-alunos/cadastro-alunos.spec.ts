import { TestBed } from '@angular/core/testing';
import { CadastroAlunos } from './cadastro-alunos';

describe('CadastroAlunos', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [CadastroAlunos] }).compileComponents();
  });

  it('should register approved and failed students', () => {
    const fixture = TestBed.createComponent(CadastroAlunos);
    fixture.detectChanges();
    const elemento = fixture.nativeElement as HTMLElement;

    cadastrar(elemento, fixture, 'ana', '9');
    cadastrar(elemento, fixture, 'pedro', '6.8');

    expect(elemento.querySelector('.aprovado')?.textContent).toContain('Ana');
    expect(elemento.querySelector('.aprovado')?.textContent).toContain('Aprovado');
    expect(elemento.querySelector('.reprovado')?.textContent).toContain('Pedro');
    expect(elemento.querySelector('.reprovado')?.textContent).toContain('Reprovado');
  });

  it('should reject empty data and grades outside the valid range', () => {
    const fixture = TestBed.createComponent(CadastroAlunos);
    fixture.detectChanges();
    const elemento = fixture.nativeElement as HTMLElement;

    elemento.querySelector('form')?.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(elemento.querySelector('.erro')?.textContent).toContain('Preencha');

    preencher(elemento, '#nome-aluno', 'Carlos');
    preencher(elemento, '#media-aluno', '11');
    elemento.querySelector('form')?.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(elemento.querySelector('.erro')?.textContent).toContain('entre 0 e 10');
    expect(elemento.querySelectorAll('li')).toHaveLength(0);
  });
});

function cadastrar(
  elemento: HTMLElement,
  fixture: ReturnType<typeof TestBed.createComponent<CadastroAlunos>>,
  nome: string,
  media: string,
): void {
  preencher(elemento, '#nome-aluno', nome);
  preencher(elemento, '#media-aluno', media);
  elemento.querySelector('form')?.dispatchEvent(new Event('submit'));
  fixture.detectChanges();
}

function preencher(elemento: HTMLElement, seletor: string, valor: string): void {
  const campo = elemento.querySelector<HTMLInputElement>(seletor);
  if (!campo) throw new Error(`Campo não encontrado: ${seletor}`);
  campo.value = valor;
  campo.dispatchEvent(new Event('input'));
}
