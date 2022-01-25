import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import * as Plotly from 'plotly.js-dist-min';
import { ValueTransformer } from '@angular/compiler/src/util';
import { keyframes } from '@angular/animations';
// import { type } from 'os';


@Component({
  selector: 'app-informatics',
  templateUrl: './informatics.component.html',
  styleUrls: ['./informatics.component.css']
})
export class InformaticsComponent {
  isShown: boolean = false; // hidden by default 
  csvRecords: any;
  header = false;
  btnName = {}
  // PAGINATION
  p: number = 1;
  collection: any[] = [];
  pageSize = 15;


  constructor(private ngxCsvParser: NgxCsvParser, private http: HttpClient) {
  }

  @ViewChild('fileImportInput', { static: false }) fileImportInput: any;

  // Your applications input change listener for the CSV File
  fileChangeListener($event: any): void {

    // Select the files from the event
    const files = $event.srcElement.files;
    console.log($event.target.files[0].name);

    // Parse the file you want to select for the operation along with the configuration
    this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
      .pipe().subscribe((result: any) => {
        this.csvRecords=result
        // console.log('Result', result);
        // READ CSV FILE
        // console.log(JSON.stringify(result));

        // take result in name and values
        
        var keys = [];
        var values = [];
        this.csvRecords = result;
        for (let i = 0; i < this.csvRecords.length; i++) {
          keys.push(Object.keys(this.csvRecords[i]))
          values.push(Object.values(this.csvRecords[i]))
        }
        // console.log('name',keys);
        // console.log('values',values);
       
        var myPlott:any = document.getElementById('myPlot');
        
        // var trace = {
        //   x: keys,
        //   y: values,
        //   type: 'scatter'
        // }

        // var data: any = [trace];
        // var layout = {
        //   title: 'Scroll and Zoom',
        // };
        const x = keys,
        y = values,
        colors =['#00000','#00000','#00000',  '#00000','#00000','#00000'],
        data:any = [{x:x, y:y,       
                 type:'bar',
                 mode:'markers', marker:{size:16, color:colors}}],
        layout:any = {
            hovermode:'closest',
            title:'Click on a Point<br>to Change Color'
         };
    
        Plotly.newPlot('myPlot', data, layout)
       
        myPlott.on('plotly_click', function(data:any){
          var pn='',
          tn:any='',
          colors=[];
      for(var i=0; i < data.points.length; i++){
        pn = data.points[i].pointNumber;
        tn = data.points[i].curveNumber;
        colors = data.points[i].data.marker.color;
      };
      colors[pn] = '#C54C82';
        
      var update = {'marker':{color: colors, size:16}};
      Plotly.restyle('myPlot', update, [tn]);
      // alert('Closest point clicked:\n\n'+pn);
    });
    myPlott.on('plotly_restyle', function(data:any){
      // console.log(data);

    });

      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });

  }

  toggleShow() {
    this.isShown = true;

  }
  downloadCSV() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Your title',
      useBom: true,
      headers: ["CRIM", "ZN", "INDUS", "CHAS", "NOX", "RM", "AGE", "DIS", "RAD", "TAX", "PTRATIO", "B"]
    };

    new ngxCsv(this.csvRecords, "informatics", options);
  }
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

}




