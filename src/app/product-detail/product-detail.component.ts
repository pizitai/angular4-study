import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public productId : number;
  
  constructor(private routerInfo: ActivatedRoute) {}
  ngOnInit() {
      //----得到了id,并把它给了productId
      this.productId=this.routerInfo.snapshot.params["id"]
      //----------------------------
  }

}