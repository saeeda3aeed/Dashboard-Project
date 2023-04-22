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
export class StudentService implements OnInit{
  

  ngOnInit(): void {
    this.db.collection('students').valueChanges().subscribe(val=>console.log(val))
  }

  private studentsCollection: AngularFirestoreCollection<Students>;
  students: Observable<Students[]>;


  constructor(private db:AngularFirestore) {
    this.studentsCollection = db.collection<Students>('students');
    this.students = this.studentsCollection.valueChanges();
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
    this.studentsCollection.doc(id).delete();

  }

  getStudents(){
    return this.db.collection('students',ref =>ref.orderBy('studentName')).valueChanges()
  }

  
}


