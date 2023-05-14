import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfoComponent } from './components/info/info.component';
import { UserComponent } from './components/user/user.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from "@angular/material/card"


//----------
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


@NgModule({
  declarations: [SidenavWrapperComponent, DashboardComponent, InfoComponent, UserComponent, AppointmentTableComponent, RequestTableComponent, ReviewTableComponent, ScheduleTableComponent, ServiceConsumerComponent, ServiceProviderComponent, StudentsComponent, PendingServiceProviderComponent, AcceptedStudentsComponent,LoginComponent],
  imports: [
    CommonModule,FormsModule,
    DashboardRoutingModule,
    // NG Material Modules
    MatSidenavModule,MatProgressSpinnerModule,
    MatIconModule,MatCardModule,
    MatListModule,
    MatToolbarModule,MatMenuModule,
    MatTableModule,MatInputModule,MatButtonModule
    
  ]
})
export class DashboardModule { }
