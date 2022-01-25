import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormBuilder, FormGroup ,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {
  alert:boolean=false;
 
  editForm=new FormGroup({
    id:new FormControl(''),
    title:new FormControl(''),
    userId:new FormControl('')

  })

  constructor(private router:ActivatedRoute ,private user:UserServiceService ) { }

  ngOnInit(): void {
    // console.log(this.router.snapshot.params.id)
    this.user.getUpdate(this.router.snapshot.params.id).subscribe(
      (data:any )=>{
          // console.log(data)
        this. editForm=new FormGroup({
          id:new FormControl(data.id),
          title:new FormControl(data.title),
          userId:new FormControl(data.userId)
      
        })       

      }) 
  }
  collection(){
    console.log("collection",this.editForm.value)
    this.user.formUpdate(this.router.snapshot.params.id,this.editForm.value).subscribe((data)=>{
    console.log("result",data)
    this.alert=true
    })
    this.editForm.reset({})
  }
  closeAlert(){
    this.alert=false
  }
  

}

