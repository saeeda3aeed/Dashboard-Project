import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private afs:AngularFirestore) {}

    addStudent(studentData:object){
    this.afs.collection('student').add(studentData).then(()=>{
      console.log('done')
    })
   }

   getStudents(){
    return this.afs.collection('student',ref =>ref.orderBy('studentAge')).valueChanges
   }
}

