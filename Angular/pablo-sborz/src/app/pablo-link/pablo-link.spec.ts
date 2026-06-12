import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PabloLink } from './pablo-link';

describe('PabloLink', () => {
  let component: PabloLink;
  let fixture: ComponentFixture<PabloLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PabloLink],
    }).compileComponents();

    fixture = TestBed.createComponent(PabloLink);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
