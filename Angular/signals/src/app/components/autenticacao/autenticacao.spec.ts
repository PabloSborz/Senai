import { TestBed } from '@angular/core/testing';
import { Autenticacao } from './autenticacao';

describe('Autenticacao', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Autenticacao],
    }).compileComponents();
  });

  it('should update the message and button according to the login state', () => {
    const fixture = TestBed.createComponent(Autenticacao);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const mensagem = compiled.querySelector('p');
    const botao = compiled.querySelector<HTMLButtonElement>('button');

    expect(mensagem?.textContent?.trim()).toBe('O usuário está deslogado');
    expect(botao?.textContent?.trim()).toBe('Logar');

    botao?.click();
    fixture.detectChanges();
    expect(mensagem?.textContent?.trim()).toBe('O usuário está logado');
    expect(botao?.textContent?.trim()).toBe('Deslogar');

    botao?.click();
    fixture.detectChanges();
    expect(mensagem?.textContent?.trim()).toBe('O usuário está deslogado');
    expect(botao?.textContent?.trim()).toBe('Logar');
  });
});
