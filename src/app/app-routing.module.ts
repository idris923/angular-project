import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddComponent} from './add/add.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { AuthGuard } from '../app/utility/app.guard';
import { TestimComponent } from './testim/testim.component';


const routes: Routes = [
 
 {
    path:"admin", component:ProductsComponent
  },
  {
    path:"add", component:AddComponent
  },
  {
    path:"home", component:HomeComponent
  }
   ,
   {
   path:"testim",component:TestimComponent
   }
    ,
    
  {
    path:"purchase", component:PurchaseComponent
  },
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'welcome', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
  { path: 'profile', loadChildren: () => import('./views/profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard] }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
