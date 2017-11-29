import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../shared/product.service';
import { FormControl } from "@angular/forms";
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private products: Observable<Product[]>;
  private imgUrl = 'http://placehold.it/320X150';
  private keyword: string;
  private titleFilter: FormControl = new FormControl;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();    
  }

}
