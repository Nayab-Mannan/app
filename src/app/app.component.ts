import { Component, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  @Input() name: string[]=[];
  constructor(public dialog: MatDialog) 
  {}
 
  openDialog() {
    // this.dialog.open(DialogBoxComponent);
    height: '90%';
  width: '60%';
  }
}
// @Component({
//   selector: 'app-dialog-box',
//   templateUrl: 'dialog-box/dialog-box.component.html',
//    styleUrls: ['dialog-box.component.css'],
// })
// export class DialogBoxComponent {}



