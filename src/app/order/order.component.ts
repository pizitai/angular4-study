import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input()
  stockCode:string;
  @Input()
  amount:number;

  constructor() {
    setInterval(() =>{
      this.stockCode = "Apple";
    },3000)
   }

  ngOnInit() {
  }

}
