import { Headers } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import 'rxjs/Rx';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  dataSource: Observable<any>;
  products: Observable<any>;

  constructor(private http: Http) {
    let myHeaders: Headers = new Headers();
    myHeaders.append('Authorization', "Basic 123456");
    this.products = this.http.get('/api/products', { headers: myHeaders })
      .map((res) => {
        return res.json()
      })
  }

  ngOnInit() {
    // this.dataSource.subscribe(
    //   (data) => {
    //     this.products = data;
    //   }
    // )
  }

}
