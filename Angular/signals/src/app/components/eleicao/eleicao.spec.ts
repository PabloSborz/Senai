import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eleicao } from './eleicao';

describe('Eleicao', () => {
  let component: Eleicao;
  let fixture: ComponentFixture<Eleicao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eleicao],
    }).compileComponents();

    fixture = TestBed.createComponent(Eleicao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
