import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceConsumerTableService implements OnInit {


  ngOnInit(): void {
    this.db.collection('Service Consumer Table').valueChanges().subscribe(val=>console.log(val))
  } 

  constructor(private db:AngularFirestore) { 
    
  }
  getServiceCosumerTable(){
    return this.db.collection('Service Consumer Table',ref =>ref.orderBy('Client_ID')).valueChanges()

  }
}
