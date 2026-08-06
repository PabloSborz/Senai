import { TestBed } from '@angular/core/testing';
import { ListaUsuarios } from './lista-usuarios';

describe('ListaUsuarios', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaUsuarios],
    }).compileComponents();
  });

  it('should render every user with id, name, and age', () => {
    const fixture = TestBed.createComponent(ListaUsuarios);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const linhas = compiled.querySelectorAll('tbody tr');

    expect(linhas).toHaveLength(3);
    expect(linhas[0].textContent).toContain('1');
    expect(linhas[0].textContent).toContain('Ana Souza');
    expect(linhas[0].textContent).toContain('28 anos');
  });

  it('should register a user with the name and age provided', () => {
    const fixture = TestBed.createComponent(ListaUsuarios);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    compiled.querySelector<HTMLButtonElement>('.botao-cadastrar')?.click();
    fixture.detectChanges();

    preencherCampo(compiled, '#novo-nome', 'daniel rocha');
    preencherCampo(compiled, '#nova-idade', '40');
    compiled.querySelector('form')?.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    const linhas = compiled.querySelectorAll('tbody tr');
    expect(linhas).toHaveLength(4);
    expect(linhas[3].textContent).toContain('Daniel Rocha');
    expect(linhas[3].textContent).toContain('40 anos');
  });

  it('should delete the selected user', () => {
    const fixture = TestBed.createComponent(ListaUsuarios);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    compiled.querySelector<HTMLButtonElement>('tbody .botao-excluir')?.click();
    fixture.detectChanges();

    const linhas = compiled.querySelectorAll('tbody tr');
    expect(linhas).toHaveLength(2);
    expect(compiled.querySelector('tbody')?.textContent).not.toContain('Ana Souza');
    expect(linhas[0].querySelector('td')?.textContent?.trim()).toBe('1');
    expect(linhas[0].textContent).toContain('Bruno Lima');
    expect(linhas[1].querySelector('td')?.textContent?.trim()).toBe('2');
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
