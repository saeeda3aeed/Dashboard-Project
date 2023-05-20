import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

interface ServiceProvider {
  active_zone:'',
  available_spots:'',
  email:'',
  first_name:'',
  last_name:'',
   national_id:'',
   number_of_raters:'',
   password:'',
   phone_number:'',
   profession:'',
   profile_pic_url:'',
   rate_ratio:'',
   is_active:false
}

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderTableService implements OnInit {
  ngOnInit(): void {
    this.db.collection('service_provider').valueChanges().subscribe(val=>console.log(val))
  } 
  
  private ServiceProviderCollection: AngularFirestoreCollection<ServiceProvider>;
  serviceProvider: Observable<ServiceProvider[]>;

  constructor(private db:AngularFirestore) { 
    this.ServiceProviderCollection = db.collection<ServiceProvider>('service_provider')
    this.serviceProvider = this.ServiceProviderCollection.valueChanges();
  }
  
  getServiceProviderTable(){

    return this.db.collection('service_provider',ref =>ref.orderBy('first_name')).valueChanges()
  }

  
  deleteServiceProvider(id:string){
    this.ServiceProviderCollection.doc(id).delete();
      }
}
