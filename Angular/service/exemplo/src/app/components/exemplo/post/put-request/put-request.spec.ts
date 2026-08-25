import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutRequest } from './put-request';

describe('PutRequest', () => {
  let component: PutRequest;
  let fixture: ComponentFixture<PutRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutRequest],
    }).compileComponents();

    fixture = TestBed.createComponent(PutRequest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
