import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeConheca } from './me-conheca';

describe('MeConheca', () => {
  let component: MeConheca;
  let fixture: ComponentFixture<MeConheca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeConheca],
    }).compileComponents();

    fixture = TestBed.createComponent(MeConheca);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
