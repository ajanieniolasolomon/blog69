import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
//import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']


})
export class AppComponent {

  naija={
    setup:'test',
    punchline:'me'
  };
setup:string;
punchline:string;
constructor(){
  this.setup='ll';
  this.punchline='mem';
}
yell(e){
  alert('hello');
}


}
