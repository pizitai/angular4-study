import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductService, Product, Comment } from '../shared/product.service';
import { WebSocketService } from '../shared/web-socket.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  comments: Comment[];
  newRating: number = 5;
  newComment: string = '';
  isCommentHidden: boolean = true;
  isWatched: boolean = false;
  currentBid: number;
  subscription: Subscription;

  constructor(private routerInfo: ActivatedRoute,
    private productService: ProductService,
    private wsService: WebSocketService) { }
  ngOnInit() {
    let productId: number = this.routerInfo.snapshot.params["productId"]
    this.productService.getProduct(productId).subscribe(
      product => {
        this.product = product;
        this.currentBid = this.product.price
      }
    );
    this.productService.getCommentsForProductId(productId).subscribe(
      comments => this.comments = comments
    );
  }
  addComment() {
    let comment = new Comment(0, this.product.id, new Date().toISOString(), "someone", this.newRating, this.newComment);
    this.comments.unshift(comment);

    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length;

    this.newComment = '';
    this.newRating = 5;
    this.isCommentHidden = true;
  }
  watchProduct() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.isWatched = false;
      this.subscription = null;
    } else {
      // this.isWatched = !this.isWatched;
      this.isWatched = true;

      this.subscription = this.wsService.createObservableSocket("ws://localhost:8085", this.product.id)
        .subscribe(products => {
          // console.log('******');
          // console.log(this.product.id)
          let product = products.find(p => p.productId === this.product.id)
          this.currentBid = product.bid
        });
    }

  }

}