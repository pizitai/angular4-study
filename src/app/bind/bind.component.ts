import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { FormControl } from "@angular/forms";
// import 'rxjs/Rx';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.scss']
})
export class BindComponent implements OnInit {
  getStockInfo(value: string): void {
    console.log(value)
  }
  ngOnInit(): void {
    
  }

  searchInput:FormControl = new FormControl();

  constructor() {
    Observable.from([1,2,3,4])
      .filter(e => e%2 == 0)
      .map( e => e*e)
      .subscribe(
        e => console.log(e),
        err => console.error(err),
        () => console.log('line is over')
      )
    this.searchInput.valueChanges
      .debounceTime(500)
      .subscribe( stockCode => this.getStockInfo(stockCode))
  }
  
  onKey(value:string){
    console.log(value);
  }
}
