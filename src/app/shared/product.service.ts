import {URLSearchParams} from '@angular/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { EventEmitter } from '@angular/core';
// import {LoggerService} from "./logger.service";

@Injectable()
export class ProductService {
  searchEvent: EventEmitter<ProductSearchParams> = new EventEmitter();


  constructor(private http: Http) { }

  getProducts(): Observable<Product[]> {
    return this.http.get("/api/products").map(res => res.json());
  }
  getAllCategories(): string[] {
    return ['电子商品', '硬件设备', '图书'];
  }
  getProduct(id: number): Observable<Product> {
    return this.http.get("/api/product/" + id).map(res => res.json());
  }
  getCommentsForProductId(id: number): Observable<Comment[]> {
    return this.http.get("/api/product/" + id + "/comments").map(res => res.json());
  }
  search(params: ProductSearchParams) {
    console.log('aa');
    return this.http.get("/api/products", { search: this.encodeParams(params) }).map(res => res.json());
  }
  private encodeParams(params: ProductSearchParams) {
    let result: URLSearchParams;
    // result.append('aa',"12");
    result = Object.keys(params)
      .filter(key => params[key])
      .reduce((sum: URLSearchParams, key: string) => {
        sum.append(key, params[key])
        return sum;
      }, new URLSearchParams())
    return result;
    // return Object.keys(params)
    //   .filter(key => params[key])
    //   .reduce((sum: URLSearchParams, key: string) => {
    //     sum.append(key, params[key])
    //     return sum;
    //   }, new URLSearchParams());
  }

}

export class Product {

  constructor(

    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}
export class Comment {
  constructor(public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string) {

  }
}
export class ProductSearchParams {
  constructor(public title: string,
    public price: number,
    public category: string
  ) { }
}