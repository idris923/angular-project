import { Component, OnInit } from '@angular/core';
import {ProdserviceService} from '../prodservice.service';
import { Product } from '../product';
import { Router } from '@angular/router';

import useEventListener from 'use-typed-event-listener'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
products:any;
productsearch:any;
name?:string;
img_url?:string
prix?:string
product= {} as any;
  filterTerm: string;
  chartproduct=[];
  



 constructor(public apiService:ProdserviceService,public route:Router) { }

  ngOnInit(): void {
  this.getAll();
  }

  getAll(){
  this.apiService.getListProducts().subscribe((listrempli)=>{
  
  this.products=listrempli
      console.log(this.products)

  })

  }

 searchByName(){
const val=(document.getElementById('in')as HTMLInputElement).value;
this.productsearch=this.apiService.searchProductByName(val,this.products)
console.log('search result',this.productsearch)

 const c_fluid=document.getElementById("content")
 
 const  row = document.querySelector('.row')
 console.log(row)
 row.innerHTML=''
    var i;
    const l=Object.keys(this.productsearch).length;
for( i=0;i<l;i++)
{
 debugger

 this.name=this.productsearch[i].name;
  this.img_url=this.productsearch[i].img_url;
 this.prix=this.productsearch[i].prix;
 console.log(this.name,this.img_url,this.prix)

 const col = document.createElement('div')
 col.classList.add('col-md-3')
 col.innerHTML=`
 <div class="product-box">
									<a href="product-detail.html">
										<img src="${this.img_url}" class="img-responsive">
									</a>
									<a href="product-detail.html">
										<h1>Lorem ipsum dolor sit amet</h1>
									</a>
									<h2>${this.name} </h2>
									<div class="price">${this.prix} $</div>
									<a href="#" class="primary-btn"><button class="purchase-btn">to cart</button></a>
								</div>
 `
 console.log('col',col)
 row.appendChild(col)

 if(i===l-1)
 {
 c_fluid.innerHTML=''
  c_fluid.appendChild(row);
  console.log('result',c_fluid.innerHTML)

 }
 }

}

check(p:any)
{
//debugger
var  element=document.querySelectorAll(".b-add");
console.log(p.name);
if(this.containsObject(p,this.chartproduct)===false)
this.chartproduct.push(p)
console.log(this.chartproduct)
 
}
 containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}


searchBtype(type:any){
this.productsearch=this.apiService.searchByType(type,this.products)

 const c_fluid=document.getElementById("content")
 
 const  row = document.querySelector('.row')
 row.innerHTML=''
    var i;
    const l=Object.keys(this.productsearch).length;
for( i=0;i<l;i++)
{
 debugger

 this.name=this.productsearch[i].name;
  this.img_url=this.productsearch[i].img_url;
 this.prix=this.productsearch[i].prix;
 console.log(this.name,this.img_url,this.prix)

 const col = document.createElement('div')
 col.classList.add('col-md-3')
 col.innerHTML=`
 <div class="product-box">
									<a href="product-detail.html">
										<img src="${this.img_url}" class="img-responsive">
									</a>
									<a href="product-detail.html">
										<h1>Lorem ipsum dolor sit amet</h1>
									</a>
									<h2>${this.name} </h2>
									<div class="price">${this.prix} $</div>
									<a href="#" class="primary-btn"><button class="purchase-btn">to cart</button></a>
								</div>
 `
 console.log('col',col)
 row.appendChild(col)

 if(i===l-1)
 {
 c_fluid.innerHTML=''
  c_fluid.appendChild(row);
  console.log('result',c_fluid.innerHTML)

 }

 }
} 
 
btnClick () {
        this.route.navigateByUrl('/testim');
};

    





    
    
 }



