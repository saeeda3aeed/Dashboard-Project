import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedStudentsComponent } from './accepted-students.component';

describe('AcceptedStudentsComponent', () => {
  let component: AcceptedStudentsComponent;
  let fixture: ComponentFixture<AcceptedStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
