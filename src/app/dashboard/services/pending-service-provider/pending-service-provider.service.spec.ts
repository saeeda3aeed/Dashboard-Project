import { TestBed } from '@angular/core/testing';

import { PendingServiceProviderService } from './pending-service-provider.service';

describe('PendingServiceProviderService', () => {
  let service: PendingServiceProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendingServiceProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
