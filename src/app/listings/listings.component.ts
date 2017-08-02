import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router,Params,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  constructor(private _firebaseservice:AppService) { }
public list:any=[];
public error;
  status:boolean=true;
  ngOnInit() {
    this._firebaseservice.getlisting().subscribe((list)=>{
this.status=false;
console.log(list);
      this.list=list;
    },(error)=>{
      this.error='unable to fetch';
    })

  }

}
