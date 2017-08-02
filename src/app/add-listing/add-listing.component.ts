import { Component, OnInit } from '@angular/core';
import {Router,Params,ActivatedRoute} from '@angular/router';
import {AppService} from '../app.service';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
img:any;
title:any;
 message:any;
  constructor(private _service:AppService,private _router:Router,private _route:ActivatedRoute) { }

  ngOnInit() {
  }
onAddsubmit(){

  let listing={
    title:this.title,
    message :this.message

  }
  this._service.addlisting(listing);
 this._router.navigate(['listings']);
  
}
check(){
  console.log(this.title);
}
}
