import { Component } from '@angular/core';
import { StudentService } from './dashboard/services/student.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[
    StudentService
  ]
})
export class AppComponent {
  title = 'expandable-sidenav';
}
