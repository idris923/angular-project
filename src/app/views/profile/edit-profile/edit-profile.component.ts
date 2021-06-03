import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { ProdserviceService } from 'src/app/prodservice.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
    products:any;

  user = '';

  constructor(private keycloakService: KeycloakService,public apiService:ProdserviceService) { }

  ngOnInit(): void {
    this.initializeUserOptions();
    this.getAll();
  }

  private initializeUserOptions(): void {
    this.user = this.keycloakService.getUsername();
  }
  getAll(){
  this.apiService.getListProducts().subscribe((listrempli)=>{
  
  this.products=listrempli
  })
  }

  logout(): void {
    this.keycloakService.logout();
  }

}