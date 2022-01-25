import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, ViewChild } from '@angular/core';
import { Chart,ChartType, Tooltip} from 'chart.js';
import { FileService } from '../file.service';



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent  
{
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;
  constructor(private _file: FileService) { }
  ngAfterViewInit() 
  {
    this._file.getData().subscribe((res:any) => {
      const values = JSON.parse(res);
      // console.log(valuesArray)
      let temp_max = values['list'].map((res:any) => res.main.temp_max);
      let temp_min = values['list'].map((res:any) => res.main.temp_min);
      let alldates = values['list'].map((res:any) => res.dt)
      // console.log(temp_max)
      // console.log(alldates)
      let weatherDates:any = []
      alldates.forEach((res:any) => {
        let jsdate = new Date(res * 1000)
        weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
    })
      console.log(weatherDates)
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

  // LINE GRAPH
  const line=  new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: weatherDates,
        datasets: [
          { 
            data: temp_max,
            borderColor: "#3cba9f",
            fill: false
          },
          { 
            data: temp_min,
            borderColor: "#ffcc00",
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });

    // BAR GRAPH
   
// const myChart = new Chart(this.ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [
//           {
//             label: 'weatherDates',
//             data:  temp_max,
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1,
            
//         }],   
//     },
  

   
// });

// PIE CHART
// const pieChart = new Chart(this.ctx, {
//   type: 'pie',
//   data: {
//   labels: [
//     'Red',
//     'Blue',
//     'Yellow'
//   ],
//   datasets: [{
//     label: 'My First Dataset',
//     data: temp_min,
//     backgroundColor: [
//       'rgb(255, 99, 132)',
//       'rgb(54, 162, 235)',
//       'rgb(255, 205, 86)'
//     ],
  
//   }]
// }

// });


// const scatter = new Chart(this.ctx, {
//      type: 'bubble',
//      data:{
//       datasets: [{
//         label: 'First Dataset',
//         data: [{
//           x: temp_max,
//           y: 40,
//           r: 12
//         }, {
//           x: 30,
//           y: 10,
//           r: 10
//         }],
//         backgroundColor: 'rgb(255, 99, 132)'
//       }]
//     } 
// })

   
  })
}

fileChangeEvent(event:any ){
  console.log("event Flag :::", event.target.files[0]);
  const fileData = event.target.files[0]

  const fileReader = new FileReader();
  fileReader.readAsText(fileData, "UTF-8");
  fileReader.onload = () => {
  var data=JSON.parse(JSON.stringify(fileReader.result));
  console.log(data);

  }
  
  }
  }

