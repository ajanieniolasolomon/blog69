import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from '@angular/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppShellModule } from '@angular/app-shell';
import { DirectiveComponent } from './directive/directive.component';
import {RouterModule} from '@angular/router';
import {router} from './app.route';
import { OthersComponent } from './others/others.component';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import {AppService} from './app.service';
import {HttpModule } from '@angular/http';
import { ListingsComponent } from './listings/listings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListingComponent } from './listing/listing.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {FlashMessagesModule} from 'angular2-flash-messages';

export const firebaseconfig = {
  production:false,
  firebase:{
    apiKey: "AIzaSyAxf-CytddOwR90yoD8RbCKaMqI4WKg-xM",
    authDomain: "blog69-a69ea.firebaseapp.com",
    databaseURL: "https://blog69-a69ea.firebaseio.com",
    projectId: "blog69-a69ea",
    storageBucket: "blog69-a69ea.appspot.com",
    messagingSenderId: "988480312697"
  }
  };
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectiveComponent,
    OthersComponent,
    FilterPipe,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppShellModule.runtime(),
    RouterModule.forRoot(router),
    FormsModule,
    AngularFireModule.initializeApp(firebaseconfig.firebase),
    HttpModule,
     AngularFireDatabaseModule,
     AngularFireAuthModule,
     FlashMessagesModule



  ],
  providers: [AppService],

  bootstrap: [AppComponent]
})
export class AppModule { }
