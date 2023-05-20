import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceConsumerTableService implements OnInit {


  ngOnInit(): void {
    this.db.collection('service_consumer').valueChanges().subscribe(val=>console.log(val))
  } 

  constructor(private db:AngularFirestore) { 
    
  }
  getServiceCosumerTable(){
    return this.db.collection('service_consumer',ref =>ref.orderBy('first_name')).valueChanges()

  }
}
