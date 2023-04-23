import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { RequestTableService } from '../../services/request-table/request-table.service';
import { ServiceConsumerTableService } from '../../services/service-consumer/service-consumer-table.service';

@Component({
  selector: 'app-service-consumer',
  templateUrl: './service-consumer.component.html',
  styleUrls: ['./service-consumer.component.scss']
})
export class ServiceConsumerComponent implements OnInit {


  
    constructor(private serviceConsumer: ServiceConsumerTableService, private db:AngularFirestore) { }
  
    serviceConsumerTableDetails = {
     Address:'',
     Client_ID:'',
     Email:'',
     First_Name:'',
     Last_Name:'',
     Location_I:'',
     Location_II:'',
     Mob_NumI:'',
     Mob_NumII:'',
     Password:''

    }
  
    ngOnInit(): void {
      this.db.collection('Service Consumer Table').valueChanges().subscribe(val=>console.log(val))
  
    }
  
    displayedColumns = [  'Address',
    'Client_ID',
    'Email',
    'First_Name',
    'Last_Name',
    'Location_I',
    'Location_II',
    'Mob_Num_I',
    'Mob_Num_II',
    'Password']
  
  
  
    dataSource = new serviceConsumerTableDataSource(this.serviceConsumer);
    
    
  }
  
  
    export class serviceConsumerTableDataSource extends DataSource<any> {
      constructor(private serviceConsumerTable : ServiceConsumerTableService){
        super()
      }
    
      connect(collectionViewer: CollectionViewer): Observable<any[]> {
        return this.serviceConsumerTable.getServiceCosumerTable()
    }
    
    disconnect(collectionViewer: CollectionViewer): void {
      
    }
    
}
