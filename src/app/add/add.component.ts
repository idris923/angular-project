import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{ProdserviceService} from '../prodservice.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

 public add:FormGroup
  constructor(public apiService:ProdserviceService,private fb:FormBuilder, public router:Router) {
      
    this.add=this.fb.group({
  name:["",[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
  img_url:["",[Validators.required]],
  prix:["",Validators.required],
  category:["",Validators.required]
    })
   }
   onadd()
    {
      const data=this.add.value;
    this.apiService.creatProduct(data).subscribe((response)=>{
      console.log(response,data)
      this.router.navigateByUrl("")
    })
    } 

  ngOnInit(): void {
  }

  get  f () {
    return this.add.controls
   } 

}
