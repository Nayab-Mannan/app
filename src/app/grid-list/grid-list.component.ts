import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})

export class GridListComponent implements OnInit {
  // Second Table 
  displayedColumns: string[] = ['checkbox','name', 'position', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
 // First Table 
  displayedColumns1: string[] = ['checkbox','name',  'symbol'];
  dataSource1 = ELEMENT_DATA1;
  // Dialog Box
constructor(public dialog: MatDialog) {
  
}
  openDialog() {
    this.dialog.open(PopupComponent,{width:'500px'});
  
   
  }
  // Table
  tableClick=false;
  table1Click=false;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 onChange(){
   this.tableClick= true
 
 }
 onClick(){
  this.table1Click= true
 }

}

@Component({
  selector: 'app-popup',
  templateUrl: '../popup/popup.component.html',
})
export class PopupComponent {

}
 // Second Table 
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
 // First Table 

export interface Element_table {
  name: string;
  symbol: string;
}
const ELEMENT_DATA1: Element_table[] = [
  { name: 'Neon',  symbol: 'Ne'},
   { name: 'Hydrogen', symbol: 'H'},
  { name: 'Neon',  symbol: 'Ne'},
   { name: 'Hydrogen', symbol: 'H'},
   { name: 'Neon',  symbol: 'Ne'},
   { name: 'Hydrogen', symbol: 'H'},
  { name: 'Neon',  symbol: 'Ne'},
   { name: 'Hydrogen', symbol: 'H'},
   { name: 'Neon',  symbol: 'Ne'},
   { name: 'Hydrogen', symbol: 'H'},
  { name: 'Neon',  symbol: 'Ne'},
   { name: 'Hydrogen', symbol: 'H'},
  
];



