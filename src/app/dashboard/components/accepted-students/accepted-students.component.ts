import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { StudentService } from '../../services/students/student.service';
import { AcceptedStudentsService } from '../../services/accepted-students/accepted-students.service';


@Component({
  selector: 'app-accepted-students',
  templateUrl: './accepted-students.component.html',
  styleUrls: ['./accepted-students.component.scss']
})

export class AcceptedStudentsComponent implements OnInit {

  constructor(private db:AngularFirestore,private student: AcceptedStudentsService ) { }
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
  
  



  displayedColumns = ['Name','Age']
  dataSource  = new acceptedStudentDataSource(this.student)

}

export class acceptedStudentDataSource extends DataSource<any> {
  constructor(private student : AcceptedStudentsService){
    super()
  }

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return this.student.getStudents()
}

disconnect(collectionViewer: CollectionViewer): void {
  
}
  }