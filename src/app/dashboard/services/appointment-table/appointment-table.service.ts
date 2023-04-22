import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

interface Appointments{
  APP_ID: string,
  RATE_VALUE:string,
  REQ_ID:string,
  REVIEW:string
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentTableService implements OnInit {
  ngOnInit(): void {
    this.db.collection('Appointment_Table').valueChanges().subscribe(val=>console.log(val))
  } 

  constructor(private db:AngularFirestore) { }

  getStudents(){
    return this.db.collection('Appointment_Table',ref =>ref.orderBy('APP_ID')).valueChanges()
  }
}
