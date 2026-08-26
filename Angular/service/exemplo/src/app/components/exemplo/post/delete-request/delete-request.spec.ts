import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRequest } from './delete-request';

describe('DeleteRequest', () => {
  let component: DeleteRequest;
  let fixture: ComponentFixture<DeleteRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteRequest],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteRequest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
