
import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
   styleUrls: ['./abc.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class AbcComponent {
  displayedColumns = ['position', 'name', 'weight','symbol','type','size'];
  dataSource = new ExampleDataSource();

  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  expandedElement: any;
}

export interface Element {
    name: string;
    position: string;
    weight: string;
    symbol: number;
    type:string;
    size:number;
  
}

const data: Element[] = [
  {  position: 'Thermally aged Nikel-based superlloy', 
      name: 'Anna kapustina',
       weight: 'SEM,DEN Induction ', 
       symbol: 60,
       type:'Experimental',
       size:10 },
       {  position: 'Thermally aged Nikel-based superlloy', 
      name: 'Anna kapustina',
       weight: 'SEM,DEN Induction ', 
       symbol: 60,
       type:'Experimental',
       size:10 },
       {  position: 'Thermally aged Nikel-based superlloy', 
       name: 'Anna kapustina',
        weight: 'SEM,DEN Induction ', 
        symbol: 60,
        type:'Experimental',
        size:10 },
        {  position: 'Thermally aged Nikel-based superlloy', 
        name: 'Anna kapustina',
         weight: 'SEM,DEN Induction ', 
         symbol: 60,
         type:'Experimental',
         size:10 },
         {  position: 'Thermally aged Nikel-based superlloy', 
         name: 'Anna kapustina',
          weight: 'SEM,DEN Induction ', 
          symbol: 60,
          type:'Experimental',
          size:10 },
          {  position: 'Thermally aged Nikel-based superlloy', 
          name: 'Anna kapustina',
           weight: 'SEM,DEN Induction ', 
           symbol: 60,
           type:'Experimental',
           size:10 },
           {  position: 'Thermally aged Nikel-based superlloy', 
           name: 'Anna kapustina',
            weight: 'SEM,DEN Induction ', 
            symbol: 60,
            type:'Experimental',
            size:10 },
            {  position: 'Thermally aged Nikel-based superlloy', 
            name: 'Anna kapustina',
             weight: 'SEM,DEN Induction ', 
             symbol: 60,
             type:'Experimental',
             size:10 },
             {  position: 'Thermally aged Nikel-based superlloy', 
             name: 'Anna kapustina',
              weight: 'SEM,DEN Induction ', 
              symbol: 60,
              type:'Experimental',
              size:10 },
              {  position: 'Thermally aged Nikel-based superlloy', 
              name: 'Anna kapustina',
               weight: 'SEM,DEN Induction ', 
               symbol: 60,
               type:'Experimental',
               size:10 },
 
];

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    // const rows = [];
    const rows: any[] = [];
    data.forEach(element => rows.push(element, { detailRow: true, element }));
    console.log(rows);
    return of(rows);
  }

  disconnect() { }
}
