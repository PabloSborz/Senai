import { TestBed } from '@angular/core/testing';
import { Autenticacao } from './autenticacao';

describe('Autenticacao', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Autenticacao],
    }).compileComponents();
  });

  it('should initially inform that the user is not logged in', () => {
    const fixture = TestBed.createComponent(Autenticacao);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.estado')?.textContent?.trim()).toBe(
      'O usuário não está logado',
    );
  });

  it('should log in when the correct credentials are submitted', () => {
    const fixture = TestBed.createComponent(Autenticacao);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    preencherCampo(compiled, '#nome-usuario', 'admin');
    preencherCampo(compiled, '#senha', 'senai123');
    fixture.detectChanges();
    compiled.querySelector('form')?.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(compiled.querySelector('.estado')?.textContent?.trim()).toBe(
      'O usuário está logado',
    );
    expect(compiled.querySelector('.erro')).toBeNull();
  });

  it('should reject incorrect credentials', () => {
    const fixture = TestBed.createComponent(Autenticacao);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    preencherCampo(compiled, '#nome-usuario', 'outro-usuario');
    preencherCampo(compiled, '#senha', 'senha-incorreta');
    fixture.detectChanges();
    compiled.querySelector('form')?.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(compiled.querySelector('.estado')?.textContent?.trim()).toBe(
      'O usuário não está logado',
    );
    expect(compiled.querySelector('.erro')?.textContent?.trim()).toBe(
      'Nome de usuário ou senha incorretos.',
    );
  });
});

function preencherCampo(elemento: HTMLElement, seletor: string, valor: string): void {
  const campo = elemento.querySelector<HTMLInputElement>(seletor);

  if (!campo) {
    throw new Error(`Campo não encontrado: ${seletor}`);
  }

  campo.value = valor;
  campo.dispatchEvent(new Event('input'));
}
