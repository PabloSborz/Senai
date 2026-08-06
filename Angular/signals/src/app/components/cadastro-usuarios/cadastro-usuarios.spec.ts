import { TestBed } from '@angular/core/testing';
import { CadastroUsuarios } from './cadastro-usuarios';

describe('CadastroUsuarios', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [CadastroUsuarios] }).compileComponents();
  });

  it('should register a valid user and display a card', () => {
    const fixture = TestBed.createComponent(CadastroUsuarios);
    fixture.detectChanges();
    const elemento = fixture.nativeElement as HTMLElement;
    preencher(elemento, '#usuario-nome', 'maria silva');
    preencher(elemento, '#usuario-email', 'MARIA@EXEMPLO.COM');
    preencher(elemento, '#usuario-senha', '123456');
    preencher(elemento, '#usuario-confirmacao', '123456');
    preencher(elemento, '#usuario-nascimento', '2000-05-10');
    elemento.querySelector('form')?.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    const card = elemento.querySelector('.usuario-card');
    expect(card?.textContent).toContain('Maria Silva');
    expect(card?.textContent).toContain('maria@exemplo.com');
    expect(card?.textContent).toContain('10/05/2000');
  });

  it('should reject different passwords', () => {
    const fixture = TestBed.createComponent(CadastroUsuarios);
    fixture.detectChanges();
    const elemento = fixture.nativeElement as HTMLElement;
    preencher(elemento, '#usuario-nome', 'Maria Silva');
    preencher(elemento, '#usuario-email', 'maria@exemplo.com');
    preencher(elemento, '#usuario-senha', '123456');
    preencher(elemento, '#usuario-confirmacao', '654321');
    preencher(elemento, '#usuario-nascimento', '2000-05-10');
    elemento.querySelector('form')?.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(elemento.querySelector('.erro')?.textContent).toContain('devem ser iguais');
    expect(elemento.querySelector('.usuario-card')).toBeNull();
  });
});

function preencher(elemento: HTMLElement, seletor: string, valor: string): void {
  const campo = elemento.querySelector<HTMLInputElement>(seletor);
  if (!campo) throw new Error(`Campo não encontrado: ${seletor}`);
  campo.value = valor;
  campo.dispatchEvent(new Event('input'));
}
