import { TestBed } from '@angular/core/testing';

import { ServiseService } from './servise.service';

describe('ServiseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiseService = TestBed.get(ServiseService);
    expect(service).toBeTruthy();
  });
});
