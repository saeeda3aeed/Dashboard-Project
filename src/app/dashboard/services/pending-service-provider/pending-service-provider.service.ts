import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PendingServiceProviderService {
  constructor(private db:AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection('Pending Service Provider Table').valueChanges().subscribe(val=>console.log(val))
  } 
  getPendingServiceProviderTable(){
    return this.db.collection('Pending Service Provider Table',ref =>ref.orderBy('Worker_ID')).valueChanges()
    
  }  
}

