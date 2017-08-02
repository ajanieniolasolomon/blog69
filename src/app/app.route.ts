import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DirectiveComponent} from './directive/directive.component';
import { AppComponent} from './app.component';
import {OthersComponent} from './others/others.component';
import { ListingsComponent } from './listings/listings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListingComponent } from './listing/listing.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';


export const router:Routes=[

  {path:'',component:HomeComponent},
    {path:'listings',component:ListingsComponent},
       {path:'listing/:id',component:ListingComponent},
          {path:'add',component: AddListingComponent},
               {path:'main',component:DirectiveComponent}
 

];
