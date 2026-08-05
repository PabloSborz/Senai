import { TestBed } from '@angular/core/testing';
import { VisualizadorImagem } from './visualizador-imagem';

describe('VisualizadorImagem', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizadorImagem],
    }).compileComponents();
  });

  it('should display the image provided in the URL field', () => {
    const fixture = TestBed.createComponent(VisualizadorImagem);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const campoUrl = compiled.querySelector<HTMLInputElement>('input');

    expect(compiled.querySelector('img')).toBeNull();

    if (campoUrl) {
      campoUrl.value = 'https://exemplo.com/imagem.jpg';
      campoUrl.dispatchEvent(new Event('input'));
    }
    fixture.detectChanges();

    const imagem = compiled.querySelector<HTMLImageElement>('img');
    expect(imagem?.getAttribute('src')).toBe('https://exemplo.com/imagem.jpg');
    expect(imagem?.getAttribute('alt')).toBe('Imagem fornecida pelo usuário');
  });
});
