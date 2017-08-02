import { Injectable, ViewChild } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import { any } from 'codelyzer/util/function';

@Injectable()
export class AppService {
  listings: FirebaseListObservable<any[]>;
    listing: FirebaseObjectObservable<any[]>;
  status:boolean=true;
  folder:any;
  constructor(private _db: AngularFireDatabase) {
this.folder='listingsimg';

  }
  getlisting():FirebaseListObservable<Listing[]>{
    this.listings=this._db.list('/listings');
    this.status=false;
    return this.listings;
  }
  getlistdetails(id):FirebaseObjectObservable<Listing>{
this.listing=this._db.object('/listings/'+id);
return this.listing;
  }
  addlisting(listing){
    let storage=firebase.storage().ref();
    for(let selecetd of [(<HTMLInputElement>document.getElementById('img')).files[0]]){
      let path=`/${this.folder}/${selecetd.name}`;
      let iRef=storage.child(path);
      iRef.put(selecetd).then((snapshot)=>{
        listing.img=selecetd.name;
       listing.path=path;
        return this.listings.push(listing);

      })
    }
  }
}
interface Listing{
  $keys?:any;
  img?:any;
  message?:any;
  title?:any;
  path?:any;
}
