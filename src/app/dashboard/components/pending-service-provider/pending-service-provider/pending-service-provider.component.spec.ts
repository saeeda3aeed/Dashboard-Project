import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingServiceProviderComponent } from './pending-service-provider.component';

describe('PendingServiceProviderComponent', () => {
  let component: PendingServiceProviderComponent;
  let fixture: ComponentFixture<PendingServiceProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingServiceProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingServiceProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
