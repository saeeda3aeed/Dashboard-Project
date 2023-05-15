import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { UserComponent } from './components/user/user.component';
import { SidenavWrapperComponent } from './components/sidenav-wrapper/sidenav-wrapper.component';
import { AppointmentTableComponent } from './components/appointment-table/appointment-table.component';
import { RequestTableComponent } from './components/request-table/request-table.component';
import { ReviewTableComponent } from './components/review-table/review-table.component';
import { ScheduleTableComponent } from './components/schedule-table/schedule-table.component';
import { ServiceConsumerComponent } from './components/service-consumer/service-consumer.component';
import { ServiceProviderComponent } from './components/service-provider/service-provider.component';
import { StudentsComponent } from './components/students/students.component';
import { PendingServiceProviderComponent } from './components/pending-service-provider/pending-service-provider/pending-service-provider.component';
import { AcceptedStudentsComponent } from './components/accepted-students/accepted-students.component';
import { LoginComponent } from '../auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  // Sidenavwrapper Component acts like a shell & the active child Component gets rendered into the <router-outlet>

    
    
      
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'sidenavwrapper',
        component: SidenavWrapperComponent
      },
    
      
      {
        path: 'info',
        component: InfoComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'appointment-table',
        component: AppointmentTableComponent
      },
      {
        path: 'request-table',
        component: RequestTableComponent
      },
      {
        path: 'review-table',
        component: ReviewTableComponent
      },
      {
        path: 'schedule-table',
        component: ScheduleTableComponent
      },
      {
        path: 'service-consumer-table',
        component: ServiceConsumerComponent
      },
      {
        path: 'service-provider-table',
        component: ServiceProviderComponent
      },
      {
        path: 'pending-service-provider',
        component: PendingServiceProviderComponent
      },
      
      {
        path: 'students-table',
        component: StudentsComponent
      },
      {
        path: 'accepted-students-table',
        component: AcceptedStudentsComponent
      },
    
  
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
