import { TestBed } from '@angular/core/testing';

import { AcceptedStudentsService } from './accepted-students.service';

describe('AcceptedStudentsService', () => {
  let service: AcceptedStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcceptedStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
