import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,Params} from "@angular/router";
@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {
public on;
  constructor(private route:ActivatedRoute,private router:Router) { }

  /*ngOnInit() {
    let id=this.route.snapshot.params['id'];
    this.setup=id;
  }*/
  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      let id=parseInt(params['id']);
      this.on=id;
    })

  }
  gop(){
    let pre=this.on + 1;
    this.router.navigate(["/home",pre]);
  }
  gob(){
    let pre=this.on - 1;
    this.router.navigate(["/home",pre]);
  }
god(){
  let selno=this.on?this.on:null;
  this.router.navigate(["/home",{id:selno}]);
}

}
