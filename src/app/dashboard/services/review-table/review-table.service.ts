import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewTableService implements OnInit {

  ngOnInit(): void {
    this.db.collection('Review Table').valueChanges().subscribe(val=>console.log(val))
  } 

  constructor(private db:AngularFirestore) { 
    
  }

  getReviewTable(){
    return this.db.collection('Review Table',ref =>ref.orderBy('Rev_ID')).valueChanges()
  }
}
