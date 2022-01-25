import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  mean: string;
  std: string;
  min: string;
  max: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 2, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 3, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 4, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 5, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 6, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 7, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 8, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 9, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 10, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 12, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 13, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 14, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 15, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 16, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 14, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 15, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 16, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 14, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 15, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 16, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 2, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 3, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 4, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 5, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 6, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 7, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 8, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 9, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 10, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 12, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 13, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 14, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 15, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 16, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 14, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 15, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 16, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 14, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 15, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 16, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 2, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 3, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 4, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 5, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 6, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 7, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 8, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 9, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 10, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 12, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 13, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 14, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 15, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 16, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 14, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 15, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 16, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 14, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 15, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 16, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 2, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 3, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 4, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 5, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 6, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 7, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 8, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 9, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 10, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 12, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 13, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 14, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 15, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 16, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 14, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 15, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 16, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 14, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 15, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 16, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 2, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 3, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 4, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 5, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 6, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 7, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 8, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 9, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 10, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 12, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 13, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 14, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 15, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 16, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 14, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 15, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 16, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 14, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 15, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
  {position: 16, name: 'Hydrogen', weight: 1.0079, symbol: 'H',mean: '',std: '',min: '',max: ''},
];

// second table
export interface Element {
  name1: string;
  position: number;
  weight1: number;
  min1: string;
  max1: string;
  std: string;
 
}

const DATA: Element[] = [
  {position: 1, name1: 'Hydrogen', weight1: 1.0079,min1: 'cv(fold)',max1: 'PD',std: ''},
  {position: 1, name1: 'Hydrogen', weight1: 1.0079,min1: 'cv(fold)',max1: 'PD',std: ''},
  {position: 1, name1: 'Hydrogen', weight1: 1.0079,min1: 'cv(fold)',max1: '',std: ''},
  {position: 1, name1: 'Hydrogen', weight1: 1.0079,min1: 'cv(fold)',max1: '',std: ''},
  {position: 1, name1: 'Hydrogen', weight1: 1.0079,min1: 'cv(fold)',max1: '',std: ''},
  {position: 1, name1: 'Hydrogen', weight1: 1.0079,min1: 'cv(fold)',max1: '',std: ''},
  {position: 1, name1: 'Hydrogen', weight1: 1.0079,min1: 'cv(fold)',max1: '',std: ''},
  {position: 1, name1: 'Hydrogen', weight1: 1.0079,min1: 'cv(fold)',max1: '',std: ''},
  {position: 1, name1: 'Hydrogen', weight1: 1.0079,min1: 'cv(fold)',max1: '',std: ''},
  {position: 1, name1: 'Hydrogen', weight1: 1.0079,min1: 'cv(fold)',max1: '',std: ''},
];

// third table

export interface Datatable {
  nm: string;
  output: string;
  model: string;
  time: string;
 
}
const DATA1: Datatable[] = [
  {nm:'', output: '', model: '',time:'' },
  {nm:'', output: '', model: '',time:'' },
  {nm:'', output: '', model: '',time: ''},
  {nm:'', output: '', model: '',time:'' },
  {nm:'', output: '', model: '',time:'' },
  {nm:'', output: '', model: '',time: ''},
  {nm:'', output: '', model: '',time:'' },
  {nm:'', output: '', model: '',time:'' },
  {nm:'', output: '', model: '',time: ''},
  {nm:'', output: '', model: '',time:'' },
  {nm:'', output: '', model: '',time:'' },
  {nm:'', output: '', model: '',time: ''},
  {nm:'', output: '', model: '',time:'' },
  {nm:'', output: '', model: '',time:'' },
  {nm:'', output: '', model: '',time: ''},
  {nm:'', output: '', model: '',time:'' },
  {nm:'', output: '', model: '',time:'' },
  {nm:'', output: '', model: '',time: ''},
  {nm:'', output: '', model: '',time:'' },
  {nm:'', output: '', model: '',time:'' },
  {nm:'', output: '', model: '',time: ''},
  {nm:'', output: '', model: '',time:'' },
  {nm:'', output: '', model: '',time:'' },
  {nm:'', output: '', model: '',time: ''},
  {nm:'', output: '', model: '',time:'' },
  {nm:'', output: '', model: '',time: ''},
  {nm:'', output: '', model: '',time:'' },
  {nm:'', output: '', model: '',time:'' },
  {nm:'', output: '', model: '',time: ''},
  {nm:'', output: '', model: '',time:'' },
  {nm:'', output: '', model: '',time:'' },
  {nm:'', output: '', model: '',time: ''},
 
 
];


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})



export class TemplateComponent implements OnInit {
  displayedColumns: string[] = [ 'position','name', 'weight', 'symbol', 'mean', 'std', 'min', 'max'];
  dataSource = ELEMENT_DATA;

  displayedColumns1: string[] =  [ 'name1', 'weight1', 'min1', 'max1','std'];
  dataSource1 = DATA;

  displayedColumns2: string[] =  ['nm', 'output', 'model', 'time'];
  dataSource2 = DATA1;

  constructor() { }

  ngOnInit(): void {
  }

}
