import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
//  import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-drop-down-work',
  templateUrl: './drop-down-work.component.html',
  styleUrls: ['./drop-down-work.component.css']
})
export class DropDownWorkComponent implements OnInit {
  show = false;
  alert:boolean=false;
  data:any=[];
  // addForm=new FormGroup({
  //   id:new FormControl(''),
  //   title:new FormControl(''),
  //   userId:new FormControl('')

  // })

 dataObject:any = {
   id:"",
   title:"",
   userId:""
 }

 
  constructor(private user:UserServiceService ,private router:Router ){
   
  this.user.getData().subscribe(data=>
  {
    console.warn(data);
    this.data=data;
  })
  }
 
  ngOnInit(): void {
    
  }

  onSubmit(){
   
    console.log(this.dataObject);
    if(this.dataObject.id=="" || this.dataObject.title=="" || this.dataObject.userId==""){
      alert("IOnput fields should not be empty.");
    }else{
      this.user.save(this.dataObject).subscribe(dataObject=>
        {
          this.user.getData().subscribe(data=>{
              console.warn(data);
              this.data=data;
             
             
            })
          
       })
       this.alert=true 
     
    }
    
    
    
   
    
  }
  closeAlert(){
    this.alert=false
  }
  
  showForm=false;
  showAddProductForm() {
    this.showForm=true;  
  }
  delete(id:number){
    // console.warn(this.collect);
       this.data.splice(id-1,1)
       this.user.delete(id).subscribe(data=>{
          this.user.getData().subscribe(data=>{
            // console.warn(data);
            this.data=data;
           
           
          })
          
         
       })
     }

}
