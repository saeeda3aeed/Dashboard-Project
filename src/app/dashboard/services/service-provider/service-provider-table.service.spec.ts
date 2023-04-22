import { TestBed } from '@angular/core/testing';

import { ServiceProviderTableService } from './service-provider-table.service';

describe('ServiceProviderTableService', () => {
  let service: ServiceProviderTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceProviderTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
