import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url='http://localhost:3000/products'
  constructor(private http:HttpClient) { }
  getData(){
    let url="http://localhost:3000/products"
    return this.http.get(url);
  }
  save(data:any){

     return this.http.post(this.url,data);
    
  }
  delete(id:any){
    return this.http.delete(`${this.url}/${id}`)

  }
  getUpdate(id:any){
    return this.http.get(`${this.url}/${id}`)
  
  }
  formUpdate(id:any,item:any){
    return this.http.put(`${this.url}/${id}`,item)
  
  }
  
 
}
