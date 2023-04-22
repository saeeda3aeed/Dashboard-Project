import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppointmentTableService } from '../../services/appointment-table/appointment-table.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';





@Component({
  selector: 'app-appointment-table',
  templateUrl: './appointment-table.component.html',
  styleUrls: ['./appointment-table.component.scss']
})
export class AppointmentTableComponent implements OnInit {


  constructor(private appointment: AppointmentTableService, private db:AngularFirestore) { }

  appointmentDetails = {
    APP_ID: '',
    RATE_VALUE:'',
    REQ_ID:'',
    REVIEW:''

  }
  ngOnInit(): void {
    this.db.collection('Appointment_Table').valueChanges().subscribe(val=>console.log(val))

  }

  displayedColumns = ['APP_ID','RATE_VALUE','REQ_ID','REVIEW','Actions']

  dataSource = new appointmentDataSource(this.appointment);
}
  export class appointmentDataSource extends DataSource<any> {
    constructor(private appointment : AppointmentTableService){
      super()
    }
  
    connect(collectionViewer: CollectionViewer): Observable<any[]> {
      return this.appointment.getStudents()
  }
  
  disconnect(collectionViewer: CollectionViewer): void {
    
  }
  

}

//   addAppointment(){
//     this.appointment.addAppointment(this.appointmentDetails)
//   }

//   removeAppointment(id:string){
//     this.appointment.deleteAppointment(id)
//   }

// }
