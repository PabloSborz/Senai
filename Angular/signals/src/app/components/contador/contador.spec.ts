import { TestBed } from '@angular/core/testing';
import { Contador } from './contador';

describe('Contador', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contador],
    }).compileComponents();
  });

  it('should start at zero, increment, and reset when the value is clicked', () => {
    const fixture = TestBed.createComponent(Contador);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const valor = compiled.querySelector<HTMLButtonElement>('.valor');
    const incrementar = compiled.querySelector<HTMLButtonElement>('.acao');

    expect(valor?.textContent?.trim()).toBe('0');

    incrementar?.click();
    fixture.detectChanges();
    expect(valor?.textContent?.trim()).toBe('1');

    valor?.click();
    fixture.detectChanges();
    expect(valor?.textContent?.trim()).toBe('0');
  });
});
