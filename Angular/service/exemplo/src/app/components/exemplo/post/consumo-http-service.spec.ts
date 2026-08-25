import { TestBed } from '@angular/core/testing';

import { ConsumoHttpService } from './consumo-http-service';

describe('ConsumoHttpService', () => {
  let service: ConsumoHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumoHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
