import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRequest } from './get-request';

describe('GetRequest', () => {
  let component: GetRequest;
  let fixture: ComponentFixture<GetRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetRequest],
    }).compileComponents();

    fixture = TestBed.createComponent(GetRequest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
