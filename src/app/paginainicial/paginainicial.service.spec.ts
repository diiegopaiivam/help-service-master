import { TestBed } from '@angular/core/testing';

import { PaginainicialService } from './paginainicial.service';

describe('PaginainicialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaginainicialService = TestBed.get(PaginainicialService);
    expect(service).toBeTruthy();
  });
});
