import { Component, OnInit,ViewChild } from '@angular/core';
import {AppService} from '../app.service';


@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']

})
export class DirectiveComponent implements OnInit {

@ViewChild('formref') form;
  constructor(private _data:AppService) { }

  ngOnInit() {

  }
}
