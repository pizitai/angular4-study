import {LoggerService} from './logger.service';
import { Injectable } from '@angular/core';
import { ProductService, Product } from "./product.service";

@Injectable()
export class AnotherProductService implements ProductService {

  constructor(public logger: LoggerService) { }
  getProduct():Product{
    return new Product(0,'sumsung7',4899,'最新款三星手机')
  }
}
