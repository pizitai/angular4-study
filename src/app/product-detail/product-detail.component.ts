import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public productTitle : string;
  
  constructor(private routerInfo: ActivatedRoute) {}
  ngOnInit() {
      this.productTitle=this.routerInfo.snapshot.params["prodTitle"]
  }

}