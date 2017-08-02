import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router,Params,ActivatedRoute} from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
id;
listing:any;
imageurl:any;
  constructor(private _service:AppService,private _router:Router,private _route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this._route.snapshot.params['id'];
    this._service.getlistdetails(this.id).subscribe((list)=>{
      this.listing=list;
      let storage=firebase.storage().ref();
     storage.child(this.listing.path).getDownloadURL().then((url)=>{
this.imageurl= url;
     }).catch((error)=>{
       console.log(error);
     })
    });
  }

}
