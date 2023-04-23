import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { ScheduleTableService } from '../../services/schedule-table/schedule-table.service';

@Component({
  selector: 'app-schedule-table',
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.scss']
})
export class ScheduleTableComponent implements OnInit {
  constructor(private scheduleTable: ScheduleTableService, private db:AngularFirestore) { }

  scheduleTableDetails = {
    Available_Spots:'',
    Sch_ID:'',
    Worker_ID:'',

  }

  ngOnInit(): void {
    this.db.collection('Schedule Table').valueChanges().subscribe(val=>console.log(val))

  }

  displayedColumns = ['Available_Spots','Sch_ID','Worker_ID']



  dataSource = new scheduleTableDataSource(this.scheduleTable);
  
  
}


  export class scheduleTableDataSource extends DataSource<any> {
    constructor(private scheduleTable : ScheduleTableService){
      super()
    }
  
    connect(collectionViewer: CollectionViewer): Observable<any[]> {
      return this.scheduleTable.getScheduleTable()
  }
  
  disconnect(collectionViewer: CollectionViewer): void {
    
  }
  

  
}
