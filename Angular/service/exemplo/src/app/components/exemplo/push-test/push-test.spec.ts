import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushTest } from './push-test';

describe('PushTest', () => {
  let component: PushTest;
  let fixture: ComponentFixture<PushTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PushTest],
    }).compileComponents();

    fixture = TestBed.createComponent(PushTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
