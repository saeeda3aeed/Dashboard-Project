import { TestBed } from '@angular/core/testing';

import { ServiceConsumerTableService } from './service-consumer-table.service';

describe('ServiceConsumerTableService', () => {
  let service: ServiceConsumerTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceConsumerTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
