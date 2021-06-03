import { Component, OnInit } from '@angular/core';
import {ProdserviceService} from '../prodservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products:any;
  constructor(public apiService:ProdserviceService) { }

  ngOnInit(): void {
  this.getAll();
  }

  getAll(){
  this.apiService.getListProducts().subscribe((listrempli)=>{
  
  this.products=listrempli
  })
  }

}
