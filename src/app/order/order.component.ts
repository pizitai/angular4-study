import { Component, OnInit, Input } from '@angular/core';
import { PriceQuote } from "../price-quote/price-quote.component";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input()
  priceQuote:PriceQuote;


  constructor() {
    
   }

  ngOnInit() {
  }

}
