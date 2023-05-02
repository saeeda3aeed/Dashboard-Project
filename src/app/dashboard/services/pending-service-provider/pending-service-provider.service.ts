import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

interface ServiceProvider{
  First_Name:string,
  Last_Name:string,
  Mob_Num_I:string,
  Mob_Num_II:string,
  Profession:string,
  Rate_Ratio:string,
  Worker_ID:string,
  State:false
}

@Injectable({
  providedIn: 'root'
})
export class PendingServiceProviderService {
  
  ngOnInit(): void {
    this.db.collection('Service Provider Table').valueChanges().subscribe(val=>console.log(val))
  } 

  private serviceProviderCollection : AngularFirestoreCollection<ServiceProvider>
  serviceProviders:Observable<ServiceProvider[]>

  constructor(private db:AngularFirestore) {
    this.serviceProviderCollection = db.collection<ServiceProvider>('Service Provider Table')
    this.serviceProviders = this.serviceProviderCollection.valueChanges();
   }

   addServiceProvider(serviceProviderTableDetails:any){
    this.db.collection('Service Provider Table').add(serviceProviderTableDetails).then((docRef)=>{
      console.log('New document added with ID:', docRef.id);

      const docId = docRef.id;
      const docToUpdate = this.db.collection('Service Provider Table').doc(docId);
      docToUpdate.update({ id: docId })
        .then(() => {
          console.log('Document updated with ID:', docId);
        })
        .catch((error) => {
          console.error('Error updating document:', error);
        });
    })
      console.log('done')
   }


   acceptServiceProvider(id:string){
    const docRef = this.db.collection('Service Provider Table').doc(id);
    docRef.update({ State: true })
    .then(() => console.log('Attribute updated successfully!'))
    .catch((error) => console.error('Error updating attribute:', error));
  }

  deleteServiceProvider(id:string){
this.serviceProviderCollection.doc(id).delete();
  }

  getPendingServiceProviderTable(){
    return this.db.collection('Service Provider Table',ref =>ref.orderBy('Worker_ID')).valueChanges()
    
  }  
}

