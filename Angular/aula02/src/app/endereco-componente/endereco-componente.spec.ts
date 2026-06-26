import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoComponente } from './endereco-componente';

describe('EnderecoComponente', () => {
  let component: EnderecoComponente;
  let fixture: ComponentFixture<EnderecoComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnderecoComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(EnderecoComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
