import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


interface Students{
  id:string,
  studentName:string,
  studentAge:string
}

@Injectable({
  providedIn: 'root'
})
export class AcceptedStudentsService implements OnInit{
  ngOnInit(): void {
    this.db.collection('students').valueChanges().subscribe(val=>console.log(val))
  }
  private studentsCollection: AngularFirestoreCollection<Students>;
  students: Observable<Students[]>;


  constructor(private db:AngularFirestore) {
    this.studentsCollection = db.collection<Students>('students');
    this.students = this.studentsCollection.valueChanges();
  }
  getStudents(){
    return this.db.collection('students',ref =>ref.orderBy('studentName')).valueChanges()
  }
  
}
