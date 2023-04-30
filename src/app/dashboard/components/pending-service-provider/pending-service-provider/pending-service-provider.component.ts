import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { PendingServiceProviderService } from 'src/app/dashboard/services/pending-service-provider/pending-service-provider.service';
@Component({
  selector: 'app-pending-service-provider',
  templateUrl: './pending-service-provider.component.html',
  styleUrls: ['./pending-service-provider.component.scss']
})
export class PendingServiceProviderComponent implements OnInit {

  constructor(private pendingServiceProvider: PendingServiceProviderService, private db:AngularFirestore) { }
  
  pendingServiceProviderTableDetails = {
    First_Name:'',
   Last_Name:'',
   Mob_Num_I:'',
   Mob_Num_II:'',
    Profession:'',
    Rate_Ratio:'',
    Worker_ID:'',
    state:false

  }

  ngOnInit(): void {
    this.db.collection('Pending Service Provider Table').valueChanges().subscribe(val=>console.log(val))
  }
  displayedColumns:[
    'First_Name',
    'Last_Name',
    'Mob_Num_I',
    'Mob_Num_II',
    'Profession',
    'Rate_Ratio',
    'Worker_ID',
    'State'
  ]

  dataSource =  new PendingServiceProviderTableDataSource(this.pendingServiceProvider);

  
}
export class PendingServiceProviderTableDataSource extends DataSource<any> {
  constructor(private pendingServiceProviderTable : PendingServiceProviderService){
    super()
  }

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return this.pendingServiceProviderTable.getPendingServiceProviderTable()
}

disconnect(collectionViewer: CollectionViewer): void {
  
}


}
