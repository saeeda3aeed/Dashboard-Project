import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ScheduleTableService implements OnInit {

  ngOnInit(): void {
    this.db.collection('Schedule Table').valueChanges().subscribe(val=>console.log(val))
  } 

  constructor(private db:AngularFirestore) { 
    
  }

  getScheduleTable(){
    return this.db.collection('Schedule Table',ref =>ref.orderBy('Sch_ID')).valueChanges()
  }
  
}
