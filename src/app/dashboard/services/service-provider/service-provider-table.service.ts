import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

interface ServiceProvider {
  First_Name:'',
  Last_Name:'',
  Mob_Num_I:'',
  Mob_Num_II:'',
   Profession:'',
   Rate_Ratio:'',
   Worker_ID:'',
   State:boolean
}

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderTableService implements OnInit {
  ngOnInit(): void {
    this.db.collection('Service Provider Table').valueChanges().subscribe(val=>console.log(val))
  } 
  
  private ServiceProviderCollection: AngularFirestoreCollection<ServiceProvider>;
  serviceProvider: Observable<ServiceProvider[]>;

  constructor(private db:AngularFirestore) { 
    this.ServiceProviderCollection = db.collection<ServiceProvider>('Service Provider Table')
    this.serviceProvider = this.ServiceProviderCollection.valueChanges();
  }
  
  getServiceProviderTable(){

    return this.db.collection('Service Provider Table',ref =>ref.orderBy('Worker_ID')).valueChanges()
  }
}
