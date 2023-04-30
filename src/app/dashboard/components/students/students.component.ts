import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { StudentService } from '../../services/students/student.service';





  @Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.scss'],
    providers:[
      StudentService
    ]
  })  
  
  
  export class StudentsComponent implements OnInit {

    constructor(private db:AngularFirestore,private student: StudentService ) { }
  ngOnInit(): void {
    this.db.collection('students').valueChanges().subscribe(val=>console.log(val))


    }
    
    //needed to add a student
  studentDetails ={
    id:'',
    studentName: '',
    studentAge: '',
    state:false
  }
  
  addStudent(){
    this.student.addStudent(this.studentDetails)
  }

  acceptStudent(id:string){
    this.student.acceptStudent(id)
  }

  removeStudent(id:string){
    this.student.deleteStudent(id)
  }



  displayedColumns = ['Name','Age','State','Actions']
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
