import { Injectable } from '@angular/core';
// import {LoggerService} from "./logger.service";

@Injectable()
export class ProductService {
  private products: Product[] = [
    new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品，我在学习慕课网Angular入门实战时创建的', ['电子商品', '硬件设备']),
    new Product(2, '第二个商品', 2.99, 2.5, '这是第二个商品，我在学习慕课网Angular入门实战时创建的', ['图书']),
    new Product(3, '第三个商品', 3.99, 4.5, '这是第三个商品，我在学习慕课网Angular入门实战时创建的', ['电子商品']),
    new Product(4, '第四个商品', 4.99, 1.5, '这是第四个商品，我在学习慕课网Angular入门实战时创建的', ['硬件设备']),
    new Product(5, '第五个商品', 5.99, 3.5, '这是第五个商品，我在学习慕课网Angular入门实战时创建的', ['电子商品', '硬件设备']),
    new Product(6, '第六个商品', 6.99, 2.5, '这是第六个商品，我在学习慕课网Angular入门实战时创建的', ['图书']),
  ];
  private comments: Comment[] = [
    new Comment(1, 1, '2017-11-22 02:22:22', '张三', 3, '东西不错'),
    new Comment(2, 1, '2017-11-23 02:22:22', '李四', 1, '东西差'),
    new Comment(3, 1, '2017-11-25 02:22:22', '王五', 2, '东西挺好'),
    new Comment(4, 2, '2017-11-24 02:22:22', '赵六', 4, '东西很不错'),
  ]

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
  getAllCategories(): string[] {
    return ['电子商品', '硬件设备', '图书'];
  }
  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }
  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id)
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