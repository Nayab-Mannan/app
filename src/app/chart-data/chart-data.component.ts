import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, ViewChild } from '@angular/core';
import { Chart,ChartType, Tooltip} from 'chart.js';
import { FileService } from '../file.service';

@Component({
  selector: 'app-chart-data',
  templateUrl: './chart-data.component.html',
  styleUrls: ['./chart-data.component.css']
})
export class ChartDataComponent  {

    canvas: any;
    ctx: any;
    @ViewChild('mychart') mychart:any;
    constructor(private _file: FileService) { }
    ngAfterViewInit() 
    {
     
      this.canvas = this.mychart.nativeElement; 
      this.ctx = this.canvas.getContext('2d');
      // new Chart(this.ctx,
      // {
      //   type: 'bar',
      //   data: 
      //   {
      //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      //     datasets: 
      //     [{
      //         label: '# of Votes',
      //         data: temp_max,
             
      //         backgroundColor: [
      //             'rgba(255, 99, 132, 0.2)',
      //             'rgba(54, 162, 235, 0.2)',
      //             'rgba(255, 206, 86, 0.2)',
      //             'rgba(75, 192, 192, 0.2)',
      //             'rgba(153, 102, 255, 0.2)',
      //             'rgba(255, 159, 64, 0.2)'
      //         ],
      //         borderColor: [
      //             'rgba(255, 99, 132, 1)',
      //             'rgba(54, 162, 235, 1)',
      //             'rgba(255, 206, 86, 1)',
      //             'rgba(75, 192, 192, 1)',
      //             'rgba(153, 102, 255, 1)',
      //             'rgba(255, 159, 64, 1)'
      //         ],
      //         borderWidth: 1,  
      //     }]  
           
      //   },
        
    
      //  options: 
      //   {
      //      // Set Responsiveness By Default Its True
      //      // When Its True Canvas Width Height won't work
      //      responsive: true,
    
      //     // Set Padding
      //    layout: {
      //      padding: {
      //       left: 50,
      //       right: 0,
      //       top: 0,
      //       bottom: 0,
      //        },
      //     },
    
      //     tooltips: {
      //      enabled: true, // Enable/Disable ToolTip By Default Its True
      //      backgroundColor: "skyblue", // Set Tooltip Background Color
      //     titleFontFamily: "Comic Sans MS", // Set Tooltip Title Font Family
      //     titleFontSize: 20, // Set Tooltip Font Size
      //     titleFontStyle: "bold italic",
      //     titleFontColor: "darkblue",
      //     titleAlign: "center",
      //     titleSpacing: 3,
      //     titleMarginBottom: 20,
      //     bodyFontFamily: "Comic Sans MS",
      //     bodyFontSize: 20,
      //     bodyFontStyle: "italic",
      //     bodyFontColor: "black",
      //     bodyAlign: "center",
      //     bodySpacing: 3,
      //     },
      //     // animation: {
      //     // duration: 5000,
      //     // easing: "easeInOutBounce",
      //     // },
      //     // onClick: function () {
      //    //     console.log("On Click");
      //    //   },
         
      // // onHover: function () {
      // //   console.log("On Hover");
      // // },
  
     
      
        
      //     // handler(chart:any) {
      //     //   chart.data.datasets.forEach((datasets:any) => {
      //     //     datasets.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100});
      //     //   });
      //     //   chart.update();
      //     // }
      
  
      //   }, 
      // }); 
     
      
    // })
  }
  
    }
    

