import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PurchaseComponent } from './purchase/purchase.component';
import { initializeKeycloak } from './utility/app.init';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { TestimComponent } from './testim/testim.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddComponent,
    HomeComponent,
    PurchaseComponent,
    TestimComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    KeycloakAngularModule

    


  ],
  providers: [
  {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
