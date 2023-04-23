import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppointmentTableService } from '../../services/appointment-table/appointment-table.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { RequestTableService } from '../../services/request-table/request-table.service';

@Component({
  selector: 'app-request-table',
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.scss'],
  providers:[
    RequestTableService
  ]
})
export class RequestTableComponent implements OnInit {

  
  constructor(private requestTable: RequestTableService, private db:AngularFirestore) { }

  requestTableDetails = {
   ClientId:'',
   Date:'',
   Details:'',
   Req_ID:'',
   Worker_ID:''
  }

  ngOnInit(): void {
    this.db.collection('Request Table').valueChanges().subscribe(val=>console.log(val))

  }

  displayedColumns = ['Client_Id','Date','Details','Req_ID','Worker_ID']



  dataSource = new requestTableDataSource(this.requestTable);
  
  
}


  export class requestTableDataSource extends DataSource<any> {
    constructor(private requestTable : RequestTableService){
      super()
    }
  
    connect(collectionViewer: CollectionViewer): Observable<any[]> {
      return this.requestTable.getRequestTable()
  }
  
  disconnect(collectionViewer: CollectionViewer): void {
    
  }
  


}
