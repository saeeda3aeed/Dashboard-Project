import { DataSource } from '@angular/cdk/collections';
import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc, updateDoc, deleteField, collection } from "firebase/firestore";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class StudentService implements OnInit{

  constructor(private db:AngularFirestore) {}
  
  ngOnInit(): void {
    this.db.collection('students').valueChanges().subscribe(val=>console.log(val))
  }


  addStudent(studentDetails:any){
 
    this.db.collection('students').add(studentDetails).then((docRef)=>{
      console.log('New document added with ID:', docRef.id);

      const docId = docRef.id;
      const docToUpdate = this.db.collection('students').doc(docId);
      docToUpdate.update({ id: docId })
        .then(() => {
          console.log('Document updated with ID:', docId);
        })
        .catch((error) => {
          console.error('Error updating document:', error);
        });
    })
      console.log('done')
  
  }
  deleteStudent(id:string): void {
    const documentRef = this.db.collection('students').doc(id);
    documentRef.delete().then(() => {
      console.log('Document successfully deleted!');
    }).catch((error) => {
      console.error('Error removing document: ', error);
    });
  }


  

  getStudents(){
    return this.db.collection('students',ref =>ref.orderBy('studentName')).valueChanges()
  }

  
}

