import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

import { ServiceProviderTableService } from '../../services/service-provider/service-provider-table.service';
@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.scss']
})
export class ServiceProviderComponent implements OnInit {

  constructor(private serviceProvider: ServiceProviderTableService, private db:AngularFirestore) { }
  
  serviceProviderTableDetails = {
    First_Name:'',
   Last_Name:'',
   Mob_Num_I:'',
   Mob_Num_II:'',
    Profession:'',
    Rate_Ratio:'',
    Worker_ID:'',
    State:false

  }

  ngOnInit(): void {
    this.db.collection('Service Provider Table').valueChanges().subscribe(val=>console.log(val))
  }
  displayedColumns=[
    'First_Name',
    'Last_Name',
    'Mob_Num_I',
    'Mob_Num_II',
    'Profession',
    'Rate_Ratio',
    'Worker_ID',
  ]

  dataSource =  new serviceProviderTableDataSource(this.serviceProvider);

  
}
export class serviceProviderTableDataSource extends DataSource<any> {
  constructor(private serviceProviderTable : ServiceProviderTableService){
    super()
  }

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return this.serviceProviderTable.getServiceProviderTable()
}

disconnect(collectionViewer: CollectionViewer): void {
  
}
}
