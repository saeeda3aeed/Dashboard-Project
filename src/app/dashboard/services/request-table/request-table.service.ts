import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestTableService implements OnInit {
  ngOnInit(): void {
    this.db.collection('request').valueChanges().subscribe(val=>console.log(val))
  } 

  constructor(private db:AngularFirestore) { 
    
  }

  getRequestTable(){
    return this.db.collection('request',ref =>ref.orderBy('client_id')).valueChanges()
  }
}
