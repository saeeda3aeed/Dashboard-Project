import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestTableService implements OnInit {
  ngOnInit(): void {
    this.db.collection('Request Table').valueChanges().subscribe(val=>console.log(val))
  } 

  constructor(private db:AngularFirestore) { 
    
  }

  getRequestTable(){
    return this.db.collection('Request Table',ref =>ref.orderBy('Req_ID')).valueChanges()
  }
}
