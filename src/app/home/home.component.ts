import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router,Params,ActivatedRoute} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {MdSnackBar} from '@angular/material';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: Observable<firebase.User>;
  name:any;
  superuser:'Ajani Eniola';

  constructor(public snackBar: MdSnackBar,public afAuth: AngularFireAuth,private router:Router,private route:ActivatedRoute,public flash:FlashMessagesService) {
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
    openSnackBar() {
    this.snackBar.open('message', 'action', {
      duration: 2000,
    });
  }
  }
