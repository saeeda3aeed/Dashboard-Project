import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewTableService implements OnInit {

  ngOnInit(): void {
    this.db.collection('review').valueChanges().subscribe(val=>console.log(val))
  } 

  constructor(private db:AngularFirestore) { 
    
  }

  getReviewTable(){
    return this.db.collection('review',ref =>ref.orderBy('client_id')).valueChanges()
  }
}
