import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../pagination.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Input,EventEmitter,Output,SimpleChange,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent  {
//   config: any;
// collection:any = [];
//  item : string[] = [];
// constructor(private route: ActivatedRoute, private router: Router) {
// this.config = {
// currentPage: 1,
// itemsPerPage: 10,
// totalItems:0

// };
// route.queryParams.subscribe(
// params => this.config.currentPage= params['page']?params['page']:1 );
 
// for (let i = 1; i <= 100; i++) {
// this.collection.push(`data ${i}`);
// }
 
// }
 
// pageChange(newPage: number) {
//     this.router.navigate([''], { queryParams: { page: newPage } });
//   }
  // title: any;
  // rows: any[] = [];

  // /* pagination */
  // p: number = 1;
  // limit: number = 3;
  // total:any;

  // constructor(
  //   private productService: PaginationService,
  // ) { }

  // ngOnInit() {
  //   this.title = 'Products';
  //   this.getProducts(this.p);
  // }

  // getProducts(p: number) {
  //   let offset = (p - 1) * this.limit;
  //   this.productService.getProducts(offset, this.limit).subscribe(
  //     result => {
  //       this.rows = result.data;
  //       this.total = result.total;
  //     }
  //   )
  // }

  // getPage(pageNo: number) {
  //   this.p = pageNo;
  //   this.getProducts(this.p);
  // }
  passenger:any;
  page: number = 1;
  itemsPerPage = 6;
  totalItems : any

  constructor(private http:HttpClient) {}
  ngOnInit() {
  
    }

  gty(page: any){
    this.http.get(`http://localhost:4000/users`).subscribe((data: any) => {
      console.log(data);
      this.passenger =  data.passenger;
      this.totalItems = data.totalPassengers;
      console.log(data.totalPassengers);
      
    })
  }
}
