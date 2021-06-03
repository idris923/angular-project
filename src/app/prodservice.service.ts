import { Injectable } from '@angular/core';
import{ HttpClient,HttpHeaders} from'@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { Product } from './product';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProdserviceService {

base_path='http://localhost:3000/products';
r:Product[]=[];
  constructor(private http: HttpClient) { }
  
  httpoptions={
    headers:new HttpHeaders({
      'content-Type':'application/json'
  })
  }

creatProduct(product:any):Observable<Product>{
    return this.http
    .post<Product>(this.base_path,JSON.stringify(product),this.httpoptions)
  }
    getListProducts():Observable<Product>{
    return this.http
    .get<Product>(this.base_path)
  }

searchProductByName(val:string,products:any):any
{
debugger
this.r=[]
 products.forEach(item => {
 //console.log('item',JSON.stringify(item))
if(item.name.toUpperCase( ).includes(val.toUpperCase( )))
this.r.push(item)
})
return this.r;

}
searchByType(val:string,products:any):any
{
this.r=[]
products.forEach(item => {
 //console.log('item',JSON.stringify(item))
if(item.category.toUpperCase( )==val.toUpperCase())
this.r.push(item)
})
console.log(this.r)
return this.r;

}



}