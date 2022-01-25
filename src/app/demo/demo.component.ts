import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DemoComponent implements OnInit {
   tabWay = "vert";
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns = ['position', 'name'

];
  dataSource = new ExampleDataSource();

  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  expandedElement: any;
}

export interface Element {
  name: string;
  position: number;
  weight:string;
  
}

const data: Element[] = [
  { position: 1, name: 'Hydrogen' ,weight:'hiu yuioopppppppp'},
  { position: 2, name: 'Helium' ,weight:'hiu yuioopppppppp'},
  { position: 3, name: 'Lithium',weight:'hiu yuioopppppppp' },
  
 
];

export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    // var codesPostal: CodePostal[] = []
    const rows:any[] = []
    data.forEach(element => rows.push(element, { detailRow: true, element }));
    console.log(rows);
    return of(rows);
  }

  disconnect() { }
}


