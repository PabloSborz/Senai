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
});
