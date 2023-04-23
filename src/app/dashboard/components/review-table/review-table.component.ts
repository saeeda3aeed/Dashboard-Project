import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { RequestTableService } from '../../services/request-table/request-table.service';
import { ReviewTableService } from '../../services/review-table/review-table.service';

@Component({
  selector: 'app-review-table',
  templateUrl: './review-table.component.html',
  styleUrls: ['./review-table.component.scss']
})
export class ReviewTableComponent implements OnInit {

  constructor(private reviewTable: ReviewTableService, private db:AngularFirestore) { }

  requestTableDetails = {
    Rev_ID:'',
    Worker_ID:''
  }

  ngOnInit(): void {
    this.db.collection('Review Table').valueChanges().subscribe(val=>console.log(val))

  }

  displayedColumns = ['Rev_ID','Worker_ID']



  dataSource = new reviewTableDataSource(this.reviewTable);
  
  
}


  export class reviewTableDataSource extends DataSource<any> {
    constructor(private reviewTable : ReviewTableService){
      super()
    }
  
    connect(collectionViewer: CollectionViewer): Observable<any[]> {
      return this.reviewTable.getReviewTable()
  }
  
  disconnect(collectionViewer: CollectionViewer): void {
    
  }
}
