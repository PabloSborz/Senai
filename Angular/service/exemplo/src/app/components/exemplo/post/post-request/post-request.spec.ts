import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRequest } from './post-request';

describe('PostRequest', () => {
  let component: PostRequest;
  let fixture: ComponentFixture<PostRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostRequest],
    }).compileComponents();

    fixture = TestBed.createComponent(PostRequest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
