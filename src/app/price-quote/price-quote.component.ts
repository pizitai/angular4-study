import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.scss']
})
export class PriceQuoteComponent implements OnInit {
  stockCode: string = 'IBM';
  price: number;
  @Output('priceChange')
  lastPrice: EventEmitter<PriceQuote> = new EventEmitter();
  @Output()
  buy:EventEmitter<PriceQuote>= new EventEmitter();

  constructor() {
    setInterval(() => {
      let priceQuote: PriceQuote = new PriceQuote(this.stockCode, 100 * Math.random());
      this.price = priceQuote.lastPrice;
      this.lastPrice.emit(priceQuote);
    }, 1000)
  }

  ngOnInit() {
  }
  buyStock(event){
    this.buy.emit(new PriceQuote(this.stockCode,this.price))
  }

}
export class PriceQuote {
  constructor(public stockCode: string,
    public lastPrice: number) { }
}