import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../services/student.service'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';




@Component({
  selector: 'app-appointment-table',
  templateUrl: './appointment-table.component.html',
  styleUrls: ['./appointment-table.component.scss']
})
export class AppointmentTableComponent implements OnInit {


  constructor(private student: StudentService, private afs:AngularFirestoreModule) { }

  ngOnInit(): void {
  }

}
