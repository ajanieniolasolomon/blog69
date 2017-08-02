import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Router,Params,ActivatedRoute} from '@angular/router';
import { ListingComponent } from '../listing/listing.component';

import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements OnInit {
  user: Observable<firebase.User>;
  name:any;


  constructor(public afAuth: AngularFireAuth,private router:Router,private route:ActivatedRoute,public snackBar: MdSnackBar) {
 this.user = afAuth.authState;
 this.afAuth.authState.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });
   }

  ngOnInit() {
  }
  login() {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());


    }

    logout() {
      this.afAuth.auth.signOut();
      

  return  this.router.navigate(['/']);

    }
 
}
