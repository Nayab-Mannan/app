import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-new-design',
  templateUrl: './new-design.component.html',
  styleUrls: ['./new-design.component.css']
})
export class NewDesignComponent implements OnInit {
  avengers:any = []; 
  models:any = []; 
  work:any = []; 

  ngOnInit() { 
  
  this.avengers = 
  [{ model: 'Datasets', name: 'Ali', feature: 'Ti,Alloy', size: '115 (7.6GB)',access:'Dec,12,2020'},
  { model: 'Datasets', name: 'Ali', feature: 'Ti,Alloy', size: '115 (7.6GB)',access:'Dec,12,2020'},
  { model: 'Datasets', name: 'Ali', feature: 'Ti,Alloy', size: '115 (7.6GB)',access:'Dec,12,2020'},
  { model: 'Datasets', name: 'Ali', feature: 'Ti,Alloy', size: '115 (7.6GB)',access:'Dec,12,2020'},
  { model: 'Datasets', name: 'Ali', feature: 'Ti,Alloy', size: '115 (7.6GB)',access:'Dec,12,2020'},
  { model: 'Datasets', name: 'Ali', feature: 'Ti,Alloy', size: '115 (7.6GB)',access:'Dec,12,2020'},
  { model: 'Datasets', name: 'Ali', feature: 'Ti,Alloy', size: '115 (7.6GB)',access:'Dec,12,2020'},
  { model: 'Datasets', name: 'Ali', feature: 'Ti,Alloy', size: '115 (7.6GB)',access:'Dec,12,2020'},
  { model: 'Datasets', name: 'Ali', feature: 'Ti,Alloy', size: '115 (7.6GB)',access:'Dec,12,2020'},
  { model: 'Datasets', name: 'Ali', feature: 'Ti,Alloy', size: '115 (7.6GB)',access:'Dec,12,2020'}, 
 
 
]; 
 
this.models = 
[{ model: 'Models', type: 'GPR', inputs: 'PC1,PC2,PC3', outputs: 'Elastic',created:'Ali',dataset:'Datasets',access:'Dec,12,2020'},
{  model: 'Models', type: 'GPR', inputs: 'PC1,PC2,PC3', outputs: 'Elastic',created:'Ali',dataset:'Datasets',access:'Dec,12,2020'},
{  model: 'Models', type: 'GPR', inputs: 'PC1,PC2,PC3', outputs: 'Elastic',created:'Ali',dataset:'Datasets',access:'Dec,12,2020'},
{ model: 'Models', type: 'GPR', inputs: 'PC1,PC2,PC3', outputs: 'Elastic',created:'Ali',dataset:'Datasets',access:'Dec,12,2020'},
{ model: 'Models', type: 'GPR', inputs: 'PC1,PC2,PC3', outputs: 'Elastic',created:'Ali',dataset:'Datasets',access:'Dec,12,2020'},
{ model: 'Models', type: 'GPR', inputs: 'PC1,PC2,PC3', outputs: 'Elastic',created:'Ali',dataset:'Datasets',access:'Dec,12,2020'},
{  model: 'Models', type: 'GPR', inputs: 'PC1,PC2,PC3', outputs: 'Elastic',created:'Ali',dataset:'Datasets',access:'Dec,12,2020'},
{ model: 'Models', type: 'GPR', inputs: 'PC1,PC2,PC3', outputs: 'Elastic',created:'Ali',dataset:'Datasets',access:'Dec,12,2020'},
{  model: 'Models', type: 'GPR', inputs: 'PC1,PC2,PC3', outputs: 'Elastic',created:'Ali',dataset:'Datasets',access:'Dec,12,2020'},
{  model: 'Models', type: 'GPR', inputs: 'PC1,PC2,PC3', outputs: 'Elastic',created:'Ali',dataset:'Datasets',access:'Dec,12,2020'}, 


]; 
this.work = 
  [{ model: 'Datasets', name: 'Ali', feature: 'Ti,Alloy', size: '115 (7.6GB)',access:'Dec,12,2020'},
  { model: 'Datasets', name: 'Ali', feature: 'Ti,Alloy', size: '115 (7.6GB)',access:'Dec,12,2020'},
  { model: 'Datasets', name: 'Ali', feature: 'Ti,Alloy', size: '115 (7.6GB)',access:'Dec,12,2020'},
  { model: 'Datasets', name: 'Ali', feature: 'Ti,Alloy', size: '115 (7.6GB)',access:'Dec,12,2020'},
  { model: 'Datasets', name: 'Ali', feature: 'Ti,Alloy', size: '115 (7.6GB)',access:'Dec,12,2020'},
  { model: 'Datasets', name: 'Ali', feature: 'Ti,Alloy', size: '115 (7.6GB)',access:'Dec,12,2020'},
  { model: 'Datasets', name: 'Ali', feature: 'Ti,Alloy', size: '115 (7.6GB)',access:'Dec,12,2020'},
  { model: 'Datasets', name: 'Ali', feature: 'Ti,Alloy', size: '115 (7.6GB)',access:'Dec,12,2020'},
  { model: 'Datasets', name: 'Ali', feature: 'Ti,Alloy', size: '115 (7.6GB)',access:'Dec,12,2020'},
  { model: 'Datasets', name: 'Ali', feature: 'Ti,Alloy', size: '115 (7.6GB)',access:'Dec,12,2020'}, 
 
 
]; 
 
  
  } 
}
