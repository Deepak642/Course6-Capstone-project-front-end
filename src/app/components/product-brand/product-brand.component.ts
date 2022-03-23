import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductBrand } from '../../common/product-brand';

@Component({
  selector: 'app-product-brand',
  templateUrl: './product-brand.component.html',
  styleUrls: ['./product-brand.component.css'],
})
export class ProductBrandComponent implements OnInit {
  productBrand: ProductBrand[];

  constructor(private _productService: ProductService) {}

  ngOnInit() {
    this.listProductBrand();
  }

  listProductBrand() {
    this._productService
      .getProductBrand()
      .subscribe((data) => (this.productBrand = data));
  }
}
