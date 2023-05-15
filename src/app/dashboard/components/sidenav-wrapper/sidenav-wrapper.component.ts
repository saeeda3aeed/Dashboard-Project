import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidenav-wrapper',
  templateUrl: './sidenav-wrapper.component.html',
  styleUrls: ['./sidenav-wrapper.component.scss']
})
export class SidenavWrapperComponent {

  isExpanded: boolean = false;
  constructor(private router: Router) { }

  navigateToInfo(): void {
    this.router.navigate(['/info']);
  }
  navigateToRequestTable(): void {
    this.router.navigate(['/request-table']);
  }
  navigateToReviewTable(): void {
    this.router.navigate(['/review-table']);
  }
  navigateToScheduleTable(): void {
    this.router.navigate(['/schedule-table']);
  }
  navigateToServiceConsumerTable(): void {
    this.router.navigate(['/service-consumer-table']);
  }
  navigateToServiceProviderTable(): void {
    this.router.navigate(['/service-provider-table']);
  }
  navigateToAppointmentTable(): void {
    this.router.navigate(['/appointment-table']);
  }
  navigateToStudentsTable(): void {
    this.router.navigate(['/students-table']);
  }
  navigateToAcceptedStudentsTable(): void {
    this.router.navigate(['/accepted-students-table']);
  }
  navigateToPendingServiceProvider(): void {
    this.router.navigate(['/pending-service-provider']);
  }
}
