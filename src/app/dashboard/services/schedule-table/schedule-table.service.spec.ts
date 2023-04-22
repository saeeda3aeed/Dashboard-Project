import { TestBed } from '@angular/core/testing';

import { ScheduleTableService } from './schedule-table.service';

describe('ScheduleTableService', () => {
  let service: ScheduleTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
