import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderTableService implements OnInit {
  constructor(private db:AngularFirestore) { }
  
  ngOnInit(): void {
    this.db.collection('Service Provider Table').valueChanges().subscribe(val=>console.log(val))
  } 
  
  getServiceProviderTable(){

    return this.db.collection('Service Provider Table',ref =>ref.orderBy('Worker_ID')).valueChanges()
  }
}
