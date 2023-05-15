import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { PendingServiceProviderService } from 'src/app/dashboard/services/pending-service-provider/pending-service-provider.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pending-service-provider',
  templateUrl: './pending-service-provider.component.html',
  styleUrls: ['./pending-service-provider.component.scss']
})
export class PendingServiceProviderComponent implements OnInit {

  
  constructor(private serviceProvider: PendingServiceProviderService, private db:AngularFirestore,private router:Router) { }
  
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

  addServiceProvider(){
    this.serviceProvider.addServiceProvider(this.serviceProviderTableDetails)
  }

  acceptServiceProvider(id:string){
    this.serviceProvider.acceptServiceProvider(id)
  }

  removeServiceProider(id:string){
this.serviceProvider.deleteServiceProvider(id)
  }

 
  ngOnInit(): void {
    this.db.collection('Service Provider Table').valueChanges().subscribe(val=>console.log(val))
  }
  displayedColumns= [
    'First_Name',
    'Last_Name',
    'Mob_Num_I',
    'Mob_Num_II',
    'Profession',
    'Rate_Ratio',
    'Worker_ID',
    'Actions'
    
  ]
  

  dataSource =  new PendingServiceProviderTableDataSource(this.serviceProvider);
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
