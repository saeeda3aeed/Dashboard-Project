import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../services/student.service'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';


export interface PeriodicElement{
  studentName:string;
  studentAge:number
}


  const ELEMENT_DATA: PeriodicElement[] = [
    {studentAge:20,studentName:'ahmed'}
  ]


  @Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.scss']
  })  
  
  export class StudentsComponent implements OnInit {

    constructor(private db:AngularFirestore,private student: StudentService ) { }
  ngOnInit(): void {
    this.db.collection('students').valueChanges().subscribe(val=>console.log(val))


    }
    
  studentDetails ={
    id:'',
    studentName: '',
    studentAge: ''
  }
  
  addStudent(){
    this.student.addStudent(this.studentDetails)
  }

  removeStudent(id:string){
    this.student.deleteStudent(id)
  }



  displayedColumns = ['Name','Age','Actions']
  dataSource  = new studentDataSource(this.student)
  }

export class studentDataSource extends DataSource<any> {
  constructor(private student : StudentService){
    super()
  }

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return this.student.getStudents()
}

disconnect(collectionViewer: CollectionViewer): void {
  
}
  }
