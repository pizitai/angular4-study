import { ProductService } from './product.service';

describe('ProductService', () => {
  it('should create an instance', () => {
    const service = new ProductService();
    expect(service).toBeTruthy();
  });
});
